import sharp from 'sharp';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { MOBILE_IMAGES, MOBILE_MODELS } from '../src/platform/mobile-assets.js';

const VERSION = 1;
sharp.concurrency(2); // Do not turn the build itself into a large parallel image-decoding memory spike.
const mipBytes = (w, h) => Math.ceil(w * h * 4 * 4 / 3);

async function shrinkImage(data, width) {
  const m = await sharp(data).metadata();
  const w = Math.min(m.width, width), h = Math.max(1, Math.round(m.height * w / m.width));
  let image = sharp(data).resize(w, h, { kernel: 'lanczos3' });
  if (m.format === 'png') image = image.png({ compressionLevel: 9 });
  else if (m.format === 'jpeg') image = image.jpeg({ quality: 88 });
  else image = image.webp({ lossless: true }); // normal/ORM/alpha data must not acquire lossy block artefacts
  return { data: await image.toBuffer(), before: [m.width, m.height], after: [w, h],
    gpuBefore: mipBytes(m.width, m.height), gpuAfter: mipBytes(w, h) };
}

// Repack embedded image bufferViews, leaving every accessor, animation, mesh and skeleton unchanged.
// The shipped models use EXT_texture_webp, not meshopt/draco offsets. Reject unknown layouts rather than corrupt them.
export async function shrinkGlb(buffer, limits) {
  if (buffer.readUInt32LE(0) !== 0x46546c67 || buffer.readUInt32LE(4) !== 2) throw new Error('Expected a GLB v2');
  const jsonLength = buffer.readUInt32LE(12);
  const json = JSON.parse(buffer.subarray(20, 20 + jsonLength).toString());
  const bin = buffer.subarray(28 + jsonLength);
  if (json.buffers.length !== 1 || json.buffers[0].uri || json.bufferViews.some(v => v.extensions)) {
    throw new Error('Mobile GLB preparation needs an uncompressed, single-buffer GLB');
  }
  const replacements = new Map(), images = [];
  for (const image of json.images ?? []) {
    if (image.bufferView == null) throw new Error('Expected embedded GLB images');
    const view = json.bufferViews[image.bufferView];
    const data = bin.subarray(view.byteOffset ?? 0, (view.byteOffset ?? 0) + view.byteLength);
    const kind = /normal/i.test(image.name) ? 'normal' : /orm/i.test(image.name) ? 'orm' : 'basecolor';
    const shrunk = await shrinkImage(data, limits[kind]);
    replacements.set(image.bufferView, shrunk.data);
    images.push({ name: image.name, before: shrunk.before, after: shrunk.after,
      gpuBefore: shrunk.gpuBefore, gpuAfter: shrunk.gpuAfter });
  }
  const parts = []; let offset = 0;
  for (let i = 0; i < json.bufferViews.length; i++) {
    const view = json.bufferViews[i];
    const data = replacements.get(i) ?? bin.subarray(view.byteOffset ?? 0, (view.byteOffset ?? 0) + view.byteLength);
    const padded = Buffer.alloc(Math.ceil(data.length / 4) * 4); data.copy(padded);
    view.byteOffset = offset; view.byteLength = data.length; parts.push(padded); offset += padded.length;
  }
  json.buffers[0].byteLength = offset;
  const rawJson = Buffer.from(JSON.stringify(json));
  const jsonChunk = Buffer.alloc(Math.ceil(rawJson.length / 4) * 4, 0x20); rawJson.copy(jsonChunk);
  const head = Buffer.alloc(20); head.writeUInt32LE(0x46546c67, 0); head.writeUInt32LE(2, 4);
  head.writeUInt32LE(28 + jsonChunk.length + offset, 8); head.writeUInt32LE(jsonChunk.length, 12); head.writeUInt32LE(0x4e4f534a, 16);
  const binHead = Buffer.alloc(8); binHead.writeUInt32LE(offset, 0); binHead.writeUInt32LE(0x004e4942, 4);
  return { data: Buffer.concat([head, jsonChunk, binHead, ...parts]), images,
    gpuBefore: images.reduce((n, i) => n + i.gpuBefore, 0), gpuAfter: images.reduce((n, i) => n + i.gpuAfter, 0) };
}

export async function prepareMobileAssets(root) {
  const cache = path.join(root, '.cache/mobile-assets');
  const manifestPath = path.join(cache, 'manifest.json');
  let previous; try { previous = JSON.parse(await readFile(manifestPath, 'utf8')); } catch {}
  const report = { version: VERSION, files: [], gpuBefore: 0, gpuAfter: 0 };
  for (const [name, limits] of Object.entries({ ...MOBILE_IMAGES, ...MOBILE_MODELS })) {
    const source = path.join(root, 'public/assets', name), dest = path.join(cache, name);
    const info = await stat(source), fingerprint = `${VERSION}:${info.size}:${info.mtimeMs}:${JSON.stringify(limits)}`;
    const old = previous?.files?.find(f => f.name === name && f.fingerprint === fingerprint);
    let file = old;
    try { await stat(dest); } catch { file = null; }
    if (!file) {
      const original = await readFile(source);
      const result = name.endsWith('.glb') ? await shrinkGlb(original, limits) : await shrinkImage(original, limits.width);
      await mkdir(path.dirname(dest), { recursive: true }); await writeFile(dest, result.data);
      const { data, ...measurements } = result;
      file = { name, fingerprint, bytesBefore: original.length, bytesAfter: data.length, ...measurements };
    }
    report.files.push(file); report.gpuBefore += file.gpuBefore; report.gpuAfter += file.gpuAfter;
  }
  await writeFile(manifestPath, JSON.stringify(report, null, 2) + '\n');
  return { cache, report };
}
