// Dependency-free ZIP of the built dist/ (not of node_modules, original assets or build caches).
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { once } from 'node:events';
import { finished } from 'node:stream/promises';
import { deflateRawSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import path from 'node:path';
const info = JSON.parse(await readFile('deployment/build-info.json', 'utf8'));
const html = await readFile('dist/index.html', 'utf8');
const manifest = JSON.parse(await readFile('dist/mobile-assets.json', 'utf8'));
if (info.buildBase !== './' || !html.includes('./assets/') || !manifest.mobileOnly) {
  throw new Error('Run npm run build:cdn first (portable, mobile-only artifact required)');
}
const table = new Uint32Array(256);
for (let i = 0; i < 256; i++) { let n = i; for (let j = 0; j < 8; j++) n = (n >>> 1) ^ ((n & 1) ? 0xedb88320 : 0); table[i] = n; }
const crc = data => { let n = 0xffffffff; for (const b of data) n = table[(n ^ b) & 255] ^ (n >>> 8); return (n ^ 0xffffffff) >>> 0; };
async function files(dir) {
  const all = []; for (const e of await readdir(dir, { withFileTypes: true })) {
    const name = path.join(dir, e.name); if (e.isDirectory()) all.push(...await files(name)); else if (e.isFile()) all.push(name);
  } return all.sort();
}
await mkdir('deployment', { recursive: true });
const destination = 'deployment/spiderbench-cdn.zip', out = createWriteStream(destination), central = [], sha = createHash('sha256');
let offset = 0;
const put = async data => { sha.update(data); offset += data.length; if (!out.write(data)) await once(out, 'drain'); };
const releaseMetadata = [];
for (const file of ['deployment/release.json', 'deployment/live-verification.json', 'deployment/startup-memory.json', 'deployment/runtime-performance.json', 'deployment/frame-budget.json']) {
  try { await readFile(file); releaseMetadata.push(file); } catch (e) { if (e.code !== 'ENOENT') throw e; }
}
for (const file of [...await files('dist'), 'LICENSE', 'deployment/README_JA.md', 'deployment/launcher.html', 'deployment/launcher.data-uri.txt', 'deployment/build-info.json', ...releaseMetadata]) {
  const original = await readFile(file), compressed = deflateRawSync(original, { level: 6 }), name = Buffer.from(file.replaceAll(path.sep, '/'));
  const h = Buffer.alloc(30); h.writeUInt32LE(0x04034b50); h.writeUInt16LE(20,4); h.writeUInt16LE(0x800,6); h.writeUInt16LE(8,8);
  h.writeUInt16LE(33,12); h.writeUInt32LE(crc(original),14); h.writeUInt32LE(compressed.length,18); h.writeUInt32LE(original.length,22); h.writeUInt16LE(name.length,26);
  const entry = Buffer.alloc(46); entry.writeUInt32LE(0x02014b50); entry.writeUInt16LE(20,4); h.copy(entry,6,4,30); entry.writeUInt32LE(offset,42);
  central.push(Buffer.concat([entry,name])); await put(h); await put(name); await put(compressed);
}
const start = offset; for (const entry of central) await put(entry);
const end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50); end.writeUInt16LE(central.length,8); end.writeUInt16LE(central.length,10);
end.writeUInt32LE(offset-start,12); end.writeUInt32LE(start,16); await put(end); out.end(); await finished(out);
const hash = sha.digest('hex'); await writeFile(destination + '.sha256', `${hash}  spiderbench-cdn.zip\n`);
console.log(`${destination}: ${central.length} files, ${(offset/1048576).toFixed(1)} MiB, SHA256 ${hash}`);
