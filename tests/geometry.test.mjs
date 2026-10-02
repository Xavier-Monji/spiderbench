import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { GrowBuffer } from '../src/world/buffer.js';
import { MB } from '../src/world/geom.js';
import { FacadeBuilder } from '../src/world/facade.js';
import { batchTiles } from '../src/world/tilebatch.js';
import { shrinkGlb } from '../scripts/mobile-assets.mjs';
import * as THREE from 'three';

function parseGlb(b) { const n = b.readUInt32LE(12); return { json: JSON.parse(b.subarray(20, 20 + n).toString()), bin: b.subarray(28 + n) }; }
test('packed construction buffer grows, supports edits and exact-size outputs', () => {
  const b = new GrowBuffer(Float32Array, 2); b.push(1, 2); b.push(3, 4, 5); b.set(1, 12);
  assert.deepEqual([...b], [1, 12, 3, 4, 5]); assert.equal(b.get(1), 12); assert.equal(b.take().byteLength, 20);
});
test('MB retains positions, transforms, indices, merging and reusable build semantics', () => {
  const a = new MB().setColor([1, 0.5, 0.25]).box(0, 0, 0, 1, 2, 3);
  const b = new MB().with(new THREE.Matrix4().makeTranslation(10, 0, 0), m => m.box(0, 0, 0, 1, 1, 1)); a.merge(b);
  const g = a.build({ part: true });
  assert.equal(g.attributes.position.count, 48); assert.equal(g.index.count, 72);
  assert.equal(g.boundingBox.max.x, 11); assert.equal(g.boundingBox.max.z, 3);
  assert.deepEqual([...g.attributes.color.array.slice(0, 3)], [1, 0.5, 0.25]);
  assert.deepEqual(g.attributes.position.array, a.build().attributes.position.array);
});
test('tile eviction never disposes buffers shared by a merged group', () => {
  const material = new THREE.MeshBasicMaterial();
  const make = () => new THREE.BoxGeometry(1, 1, 1);
  const single = make(); let disposed = 0; single.addEventListener('dispose', () => disposed++);
  const independent = batchTiles([single], material, 'test', { merge: false }); independent.releaseGpu(0); assert.equal(disposed, 1);
  const merged = batchTiles([make(), make()], material, 'test', {}, [[0, 0], [256, 0]]);
  for (const m of merged.meshes) m.geometry.addEventListener('dispose', () => disposed++);
  merged.releaseGpu(0); merged.releaseGpu(1); assert.equal(disposed, 1);
});
test('facade precision and output attribute layout remain unchanged', () => {
  const b = new FacadeBuilder(); b.box(0, 0, 0, 20, 30, 10, { seed: 123, layer: 2, topY: 30 });
  const g = b.build(); assert.ok(g.attributes.aS); assert.equal(g.boundingBox.max.y, 30); assert.equal(g.attributes.aS.getY(0), 123);
});
test('mobile GLB reduces embedded textures but preserves ALL accessor/mesh/animation bytes', async () => {
  const source = await readFile(new URL('../public/assets/thug.glb', import.meta.url));
  const result = await shrinkGlb(source, { normal: 512, orm: 512, basecolor: 1024 });
  const before = parseGlb(source), after = parseGlb(result.data);
  assert.equal(result.data.readUInt32LE(8), result.data.length); assert.ok(result.gpuAfter < result.gpuBefore / 3);
  for (const key of ['accessors', 'meshes', 'skins', 'animations', 'nodes', 'textures', 'images']) assert.deepEqual(after.json[key], before.json[key]);
  const images = new Set(before.json.images.map(i => i.bufferView));
  for (let i = 0; i < before.json.bufferViews.length; i++) {
    const a = before.json.bufferViews[i], b = after.json.bufferViews[i];
    assert.equal(b.byteOffset % 4, 0); assert.ok(b.byteOffset + b.byteLength <= after.bin.length);
    if (!images.has(i)) assert.deepEqual(after.bin.subarray(b.byteOffset, b.byteOffset + b.byteLength), before.bin.subarray(a.byteOffset, a.byteOffset + a.byteLength));
  }
});

test('streamed tile warm-up readiness follows CPU/GPU lifecycle without hiding the fallback prematurely', () => {
  const g = new THREE.BoxGeometry(), s = { ready: false, gpuReady: false }; g.userData.streaming = s;
  const b = batchTiles([g], new THREE.MeshBasicMaterial(), 'stream-test', { merge: false }, [[0,0]]);
  assert.equal(b.hasDrawReady(0), false); s.ready = true; assert.equal(b.hasDrawReady(0), false);
  s.gpuReady = true; assert.equal(b.hasDrawReady(0), true); s.ready = false; assert.equal(b.hasDrawReady(0), false);
});
