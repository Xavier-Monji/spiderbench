import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { Solids, CollisionGrid } from '../src/world/collision.js';
import { compactGeometry } from '../src/render/geometry-budget.js';
import { indexedBuffer } from '../src/world/indexed-buffer.js';
test('indexed typed storage supports legacy array syntax, flags, growth and iterators', () => {
  const a = indexedBuffer(Uint8Array); for (let i = 0; i < 1000; i++) a.push(i % 128);
  a[2] |= 4; assert.equal(a[2], 6); assert.equal(a.length, 1000); assert.equal(Array.from(a)[999], 999 % 128);
});
test('compact solid construction produces identical packed collision data and ray hits', () => {
  const a = new Solids({ compact: false }), b = new Solids({ compact: true });
  const write = s => { s.box(-2, 0, -2, 2, 10, 2); s.cyl(5, 5, 0, 3, 1, .5, 'pole'); s.remove(s.box(8, 0, 8, 9, 1, 9)); };
  write(a); write(b); const ga = new CollisionGrid(a), gb = new CollisionGrid(b);
  for (const k of ['type', 'bb', 'par', 'flags', 'kind', 'start', 'items']) assert.deepEqual(ga[k], gb[k]);
  assert.deepEqual(ga.cast(0, 5, -20, 0, 0, 1, 50), gb.cast(0, 5, -20, 0, 0, 1, 50));
});
test('attribute packing keeps positions/indices/world UVs exact and colour/normal error bounded', () => {
  const g = new THREE.BoxGeometry(10, 20, 30), position = g.attributes.position, uv = g.attributes.uv, index = g.index;
  const col = new Float32Array(g.attributes.position.count * 3).fill(1.27); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  compactGeometry(g); assert.equal(g.attributes.position, position); assert.equal(g.attributes.uv, uv); assert.equal(g.index, index);
  assert.ok(g.attributes.normal.array instanceof Int16Array); assert.equal(g.attributes.normal.normalized, true);
  assert.ok(g.attributes.color.isFloat16BufferAttribute); assert.ok(Math.abs(g.attributes.color.getX(0) - 1.27) < .001);
  const other = new THREE.BufferGeometry(); const n = new THREE.Float32BufferAttribute([0, .8, .6], 3), cache = new WeakMap();
  g.setAttribute('normal', n); other.setAttribute('normal', n); compactGeometry(g, cache); compactGeometry(other, cache);
  assert.equal(g.attributes.normal, other.attributes.normal);
});
