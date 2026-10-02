import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { MB } from '../src/world/geom.js';
import { FacadeBuilder } from '../src/world/facade.js';
import { RB } from '../src/world/rooftops.js';
import { deferredBuilder, createGeometryStreamer } from '../src/world/streaming.js';
const mbMethods = ['vert', 'tri', 'quad', 'box', 'boxC', 'cyl', 'tube'];
const expand = (recipe, options = {}) => { const it = recipe.expand(options); let s; do { s = it.next(); } while (!s.done); return s.value; };
function sameGeometry(a, b) {
  assert.deepEqual(Object.keys(a.attributes), Object.keys(b.attributes));
  for (const key of Object.keys(a.attributes)) assert.deepEqual(a.attributes[key].array, b.attributes[key].array, key);
  assert.deepEqual(a.index.array, b.index.array); assert.deepEqual(a.boundingBox, b.boundingBox);
}
test('detail recipes reproduce every byte including mixed primitives, transforms and direct vertex indices', () => {
  const a = new MB(), b = deferredBuilder(MB, { methods: mbMethods, role: 'detail', cx: 128, cz: 128, range: 240 });
  const write = m => {
    m.setColor(0x4c678b).setPart(2).box(3, 0, 7, 5, 4, 9, 51).cyl(0, 1, 0, 0.5, 0.2, 2, 9, true);
    m.with(new THREE.Matrix4().makeRotationY(0.6), n => { n.setColor([0.1, 0.2, 0.3]).boxC(8, 7, 9, 1, 2, 3); n.tube([1, 2, 3], [4, 5, 6], 0.05, 8, true); });
    const v = m.vert(0, 0, 0, 0, 1, 0), v1 = m.vert(1, 0, 0, 0, 1, 0), v2 = m.vert(0, 0, 1, 0, 1, 0); m.tri(v, v1, v2);
  };
  write(a); write(b); b.recipe.compress(); b.recipe.compress(); assert.equal(b.v, a.v); sameGeometry(a.build({ part: true }), expand(b.recipe, { part: true }));
});
test('facade recipes snapshot later-mutated parameter objects without changing geometry or attributes', () => {
  const a = new FacadeBuilder(), b = deferredBuilder(FacadeBuilder, { methods: ['quad', 'horiz', 'box', 'fan', 'ring', 'cyl', 'innerRing'], role: 'facade', cx: 0, cz: 0, range: 420 });
  const write = m => { const p = { seed: 456, layer: 2, tint: [1, 0.8, 0.5], topY: 25 };
    m.box(-5, 0, -5, 5, 25, 5, p); p.tint[1] = 0.3;
    m.cyl(8, 8, 3, 25, 30, 12, p, 1); m.fan([[0, 0], [8, 0], [6, 9]], 20, p); };
  write(a); write(b); b.recipe.compress(); b.recipe.compress(); sameGeometry(a.build(), expand(b.recipe));
});
test('roof recipes keep original atlas, normals, skin metadata, lathes and precision', () => {
  const a = new RB(), b = deferredBuilder(RB, { methods: ['skin', 'box', 'obox', 'disc', 'cyl', 'lathe'], role: 'roof', cx: 0, cz: 0, range: 420,
    returns: { skin: (...args) => RB.prototype.skin.call({ _v: () => 0, i: { push() {} } }, ...args) } });
  const write = m => { const s = m.skin(1, 2, 9, 12, 10, 1, [1, 1, 1], 3, 4, false); assert.deepEqual(s.U(4, 5), [7, -1]);
    m.box(0, 0, 0, 1, 3, 2, 8, [0.5, 0.6, 0.7]); m.cyl(2, 2, 1, 3, 6, [0.3, 0.4, 0.5]);
    m.lathe([2, 8, 2], [0, 1, 0], [[1, 0], [0.8, 1], [0.2, 2]], 10, [1, 1, 1], 8, { cap: [0.2, 0.3, 0.4] }); };
  write(a); write(b); b.recipe.compress(); b.recipe.compress(); sameGeometry(a.build(), expand(b.recipe));
});
test('streamer replays in slices, frees CPU/GPU geometry and rebuilds it when returning', async () => {
  const scene = new THREE.Scene(), b = deferredBuilder(MB, { methods: mbMethods, role: 'detail', cx: 0, cz: 0, range: 240 });
  for (let i = 0; i < 2200; i++) b.box(i / 10, 0, 0, i / 10 + 0.1, 2, 1);
  const g = b.build({ part: true }), material = new THREE.MeshBasicMaterial(); scene.add(new THREE.Mesh(g, material));
  const stream = createGeometryStreamer(scene); let disposes = 0; g.addEventListener('dispose', () => disposes++);
  await stream.prime(new THREE.Vector3()); assert.equal(g.attributes.position.count, 52800);
  const original = g.attributes.position.array.slice(); assert.ok(stream.stats.residentBytes > 0);
  stream.update(new THREE.Vector3(3000, 0, 3000)); assert.equal(stream.stats.residentBytes, 0); assert.equal(g.attributes.position.count, 0); assert.ok(disposes >= 2);
  await stream.prime(new THREE.Vector3()); assert.deepEqual(g.attributes.position.array, original);
  assert.ok(stream.stats.recipeBytes < stream.stats.residentBytes / 10);
});


test('compressed recipes preserve nested types, mutable snapshots, exceptional numbers, holes and repeated replay', () => {
  class Capture {
    setColor() {} setPart() {} setXf() {}
    input(...args) { this.args = args; }
    build(options) { return { args: this.args, options }; }
  }
  const b = deferredBuilder(Capture, { methods: ['input'], role: 'capture', cx: 0, cz: 0, range: 1 });
  const fn = () => 123;
  const data = { empty: undefined, neg: -0, inf: Infinity, nan: NaN, color: new THREE.Color(0.123456789, 0.3, 1.2),
    matrix: new THREE.Matrix4().makeTranslation(1.123456789, 2, 3), v: new THREE.Vector3(1, 2, 3),
    q: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.34), sparse: [undefined, , 3],
    reserved: { $sb: ['undefined', 42] }, fn };
  const expected = structuredClone({ ...data, fn: undefined });
  b.input(data, NaN, Infinity, -Infinity, -0, undefined, true, false, null, 'text');
  data.color.r = 9; data.matrix.elements[12] = 99; data.sparse[2] = 9;
  b.recipe.compress(); const bytes = b.recipe.bytes; b.recipe.compress();
  assert.equal(b.recipe.commands, 1); assert.equal(b.recipe.bytes, bytes);
  for (let i = 0; i < 2; i++) {
    const out = expand(b.recipe, { marker: i }), [d, ...values] = out.args;
    assert.ok(Object.hasOwn(d, 'empty')); assert.equal(d.empty, undefined); assert.ok(Object.is(d.neg, -0));
    assert.equal(d.inf, Infinity); assert.ok(Number.isNaN(d.nan));
    assert.ok(d.color.isColor); assert.deepEqual(d.color.toArray(), [expected.color.r, expected.color.g, expected.color.b]);
    assert.ok(d.matrix.isMatrix4); assert.deepEqual(d.matrix.elements, expected.matrix.elements);
    assert.ok(d.v.isVector3); assert.ok(d.q.isQuaternion); assert.deepEqual(d.q.toArray(), data.q.toArray());
    assert.ok(Object.hasOwn(d.sparse, 0)); assert.ok(!Object.hasOwn(d.sparse, 1)); assert.equal(d.sparse[2], 3);
    assert.deepEqual(d.reserved, { $sb: ['undefined', 42] }); assert.equal(d.fn, fn);
    assert.deepEqual(values, [NaN, Infinity, -Infinity, -0, undefined, true, false, null, 'text']);
    assert.equal(out.options.consume, true);
    // Replaying must produce fresh objects, not carry mutations from a previous visit to the tile.
    d.color.r = 999; d.sparse[2] = 999;
  }
});
