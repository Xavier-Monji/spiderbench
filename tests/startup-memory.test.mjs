import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { getQuality, PRESETS } from '../src/render/quality.js';
import { DecalBuilder } from '../src/world/ground.js';
import { CB } from '../src/world/waterfront.js';
import { SB } from '../src/world/signage.js';
import { PackedPlantItems, RoofPlants, PLANT } from '../src/world/roofplants.js';
import { Pool } from '../src/world/pool.js';
import { CanopyBatch } from '../src/world/canopy.js';
import { Solids, CollisionGrid, fitInstancedSolids, fitInstancedSolidsAsync } from '../src/world/collision.js';
import { generateBuildings, generateBuildingsAsync } from '../src/world/buildings.js';
import { buildBlocks, MAPS } from '../src/world/layout.js';

// Tests in this file are serial. Keep the production singleton on mobile without affecting other test processes.
Object.assign(getQuality(), PRESETS.mobile);
const sameGeometry = (a, b) => {
  assert.deepEqual(Object.keys(a.attributes), Object.keys(b.attributes));
  for (const key of Object.keys(a.attributes)) assert.deepEqual(a.attributes[key].array, b.attributes[key].array, key);
  assert.deepEqual(a.index?.array, b.index?.array);
  assert.deepEqual(a.boundingBox, b.boundingBox);
};
const expand = recipe => {
  const it = recipe.expand(); let r;
  do { r = it.next(); } while (!r.done);
  return r.value;
};

test('typed signage is byte-exact, reusable, and consume releases every construction buffer', () => {
  const b = new SB();
  const quad = () => b.quad([[0, 0, 0], [1, 0, 0], [1, 2, 0], [0, 2, 0]], [0, 0, 1], [0.1, 0.2, 0.3, 0.4], [0.8, 1.2, 0.3], 3, 0.6);
  quad(); const expected = b.build();
  assert.deepEqual(expected.attributes.position.array, new Float32Array([0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 2, 0]));
  assert.deepEqual(expected.attributes.uv.array, new Float32Array([0.1, 0.2, 0.3, 0.2, 0.3, 0.4, 0.1, 0.4]));
  assert.deepEqual(expected.attributes.aLoc.array, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]));
  assert.deepEqual(expected.attributes.aSig.array, new Float32Array([3, 0.6, 3, 0.6, 3, 0.6, 3, 0.6]));
  assert.deepEqual(expected.index.array, new Uint16Array([0, 1, 2, 0, 2, 3]));
  sameGeometry(expected, b.build()); sameGeometry(expected, b.build({ consume: true }));
  assert.equal(b.v, 0); assert.equal(b.build(), null);
  for (const key of ['p', 'n', 'uv', 'c', 's', 'l', 'i']) {
    assert.equal(b[key].length, 0); assert.equal(b[key].a.byteLength, 0);
  }
  quad(); sameGeometry(expected, b.build({ consume: true }));
});

test('packed roof plants keep exact records, species/scales, instance matrices and all selection paths', () => {
  const plants = new RoofPlants();
  plants.add(1.123456789, 12.3456789, -2, 0.7, 1.4, PLANT.SHRUB, [0.3, 0.6, 0.9], 0.123456789);
  plants.add(4, 15, 7, 0.9, 2, PLANT.GRASS, [0.2, 0.4, 0.8], 0.8);
  assert.equal(plants.count, 2); assert.ok(plants.items[0] instanceof PackedPlantItems);
  assert.deepEqual(plants.items[0].record(0), { x: 1.123456789, y: 12.3456789, z: -2, ry: 0.123456789, s: 1,
    scale3: [0.7, 1.4, 0.7], extra: { aPlant: [0, 0.3, 0.6, 0.9] } });
  assert.deepEqual(plants.items[1].record(0).scale3, [1.8, 2, 1.8]);
  assert.deepEqual(plants.items[1].record(0).extra.aPlant, [5, 0.2, 0.4, 0.8]);
  const items = new PackedPlantItems();
  for (let i = 0; i < 240; i++) items.add(i % 20 * 12.7 - 100, 10 + i % 5, Math.floor(i / 20) * 15.3 - 60,
    i * 0.123456789, 0.8, 1.2, 0.8, i % 4, 0.4 + i * 0.001, 0.6, 0.7);
  items.seal(); assert.equal(items.data.a.byteLength, items.length * 11 * 8);
  const records = Array.from({ length: items.length }, (_, i) => items.record(i));
  for (const isStatic of [false, true]) for (const max of [32, 512]) for (const sorted of [false, true]) {
    Pool.sortF2B = sorted;
    const make = () => new Pool(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial(),
      { max, isStatic, far: 150, shadowFar: 40, extra: { aPlant: 4 } });
    const a = make(), b = make(); a.items = records; b.items = items;
    for (const cam of [new THREE.Vector3(), new THREE.Vector3(90, 25, 100), new THREE.Vector3(-120, 0, -60)]) {
      a.update(cam, true); b.update(cam, true);
      assert.equal(a.mesh.count, b.mesh.count); assert.equal(a.nShadow, b.nShadow);
      assert.deepEqual(a.mesh.instanceMatrix.array, b.mesh.instanceMatrix.array);
      for (const k of ['aPlant', 'aLod']) assert.deepEqual(a.extra[k].array, b.extra[k].array);
    }
    a.mesh.dispose(); b.mesh.dispose(); a.geo.dispose(); b.geo.dispose(); a.mat.dispose(); b.mat.dispose();
  }
  Pool.sortF2B = true;
});

test('normal prop records remain mutable and hide/show still changes the original instance', () => {
  const p = new Pool(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
  const item = p.add(1, 2, 3); assert.equal(p.itemAt(0), item);
  p.hide(item); p.update(new THREE.Vector3(), true);
  assert.equal(item.hidden, true); assert.equal(p.mesh.instanceMatrix.array[0], 0);
  p.show(item); p.update(new THREE.Vector3(), true);
  assert.equal(item.hidden, false); assert.equal(p.mesh.instanceMatrix.array[0], 1);
});

test('mobile canopy source release preserves counts and byte-exact instancing, including tiled batches', () => {
  for (const tile of [null, 128]) {
    const b = new CanopyBatch(123); for (let i = 0; i < 120; i++) b.add(i * 10 - 500, 0.15, i % 5 * 150 - 300, 3 + i % 4);
    const original = b.M.map((m, i) => [m.elements[12], Float32Array.from(m.elements), Float32Array.from(b.C.slice(i * 3, i * 3 + 3))]);
    const scene = new THREE.Scene(); b.build(scene, 'test-canopy', true, { tile });
    assert.equal(b.count, 120); assert.equal(b.M.length, 0); assert.equal(b.C.length, 0);
    const actual = [];
    scene.traverse(m => { if (m.isInstancedMesh) for (let i = 0; i < m.count; i++) actual.push([
      m.instanceMatrix.array[i * 16 + 12], m.instanceMatrix.array.slice(i * 16, i * 16 + 16), m.instanceColor.array.slice(i * 3, i * 3 + 3)]); });
    const byX = (a, b) => a[0] - b[0]; assert.deepEqual(actual.sort(byX), original.sort(byX));
  }
});

test('yielding collision refit returns identical solids, fields and ray hits to the synchronous API', async () => {
  const pool = new Pool(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), new THREE.MeshStandardMaterial(), { name: 'equipment' });
  for (let i = 0; i < 20; i++) pool.add(i * 3, 4, 0, (i % 4) * 0.2);
  const a = new Solids(), b = new Solids();
  for (const it of pool.items) { a.box(it.x - 1, 4, -1, it.x + 1, 6, 1, 'equipment'); b.box(it.x - 1, 4, -1, it.x + 1, 6, 1, 'equipment'); }
  const options = { cell: 0.05, spec: { equipment: { minY: 3, solidBase: true } } };
  const expected = fitInstancedSolids(a, [pool], options);
  assert.deepEqual(await fitInstancedSolidsAsync(b, [pool], options), expected);
  for (const key of ['t', 'b', 'p', 'f', 'k']) assert.deepEqual(Array.from(a[key]), Array.from(b[key]));
  assert.deepEqual(a.fields, b.fields);
  const ga = new CollisionGrid(a), gb = new CollisionGrid(b);
  assert.deepEqual(ga.cast(0, 12, 0, 0, -1, 0, 20), gb.cast(0, 12, 0, 0, -1, 0, 20));
});

test('yielding building generation preserves seed, geometry, collision and map metadata', async () => {
  // Exercise grid and irregular-map blocks without allocating the entire city in a unit test.
  const cells = MAPS.map(m => m.cells); MAPS.forEach(m => { m.cells = m.cells.slice(0, 2); });
  try {
    const blocks = buildBlocks().filter(b => b.px0 > 255 && b.px1 < 610 && Math.abs(b.pz0) < 500).slice(0, 3);
    const a = generateBuildings(blocks, 42), b = await generateBuildingsAsync(blocks, 42);
    assert.ok(a.buildings.length > 0); assert.deepEqual(a.boxes, b.boxes); assert.deepEqual(a.footprints, b.footprints);
    for (const key of ['t', 'b', 'p', 'f', 'k']) assert.deepEqual(Array.from(a.solids[key]), Array.from(b.solids[key]));
    assert.deepEqual([...a.tiles.keys()], [...b.tiles.keys()]);
    for (const [key, ta] of a.tiles) {
      const tb = b.tiles.get(key);
      for (const role of ['fac', 'det']) {
        ta[role].recipe.compress(); tb[role].recipe.compress();
        const ga = expand(ta[role].recipe), gb = expand(tb[role].recipe);
        if (ga) sameGeometry(ga, gb); else assert.equal(gb, null);
      }
      const ga = ta.lod.build(), gb = tb.lod.build(); if (ga) sameGeometry(ga, gb); else assert.equal(gb, null);
    }
  } finally { MAPS.forEach((m, i) => { m.cells = cells[i]; }); }
});


test('typed street decals retain rotated UVs, exact attributes and release reusable builders on mobile', () => {
  const d = new DecalBuilder({ line: [0.1, 0.2, 0.3, 0.4] });
  d.add('line', 2, 4, 2, 4, 1, [0.8, 0.9, 1], 0.012);
  const g = d.build();
  assert.deepEqual(g.attributes.position.array, new Float32Array([1, 0.012, 6, 3, 0.012, 6, 3, 0.012, 2, 1, 0.012, 2]));
  assert.deepEqual(g.attributes.normal.array, new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]));
  assert.deepEqual(g.attributes.uv.array, new Float32Array([0.1, 0.2 + 0.4, 0.1, 0.2, 0.1 + 0.3, 0.2, 0.1 + 0.3, 0.2 + 0.4]));
  assert.deepEqual(g.index.array, new Uint32Array([0, 1, 2, 0, 2, 3]));
  for (const k of ['P', 'UV', 'C', 'I']) { assert.equal(d[k].length, 0); assert.equal(d[k].a.byteLength, 0); }
  d.add('line', 2, 4, 2, 4, 1, [0.8, 0.9, 1], 0.012); sameGeometry(g, d.build());
});

test('typed waterfront batches preserve winding, UVs, colours, tile attributes, bounds and consumed output', () => {
  const cb = new CB();
  const write = () => cb.poly([[0, 0, 0], [1, 0, 0], [1, 2, 0], [0, 2, 0]], [0, 0, 1],
    [[0.1, 0.2], [0.3, 0.2], [0.3, 0.4], [0.1, 0.4]], [0.1, 0.7, 1.2], 6);
  write(); const g = cb.build();
  assert.deepEqual(g.attributes.position.array, new Float32Array([0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 2, 0]));
  assert.deepEqual(g.attributes.color.array, new Float32Array(Array(4).fill([0.1, 0.7, 1.2]).flat()));
  assert.deepEqual(g.attributes.aTile.array, new Float32Array([6, 6, 6, 6]));
  assert.deepEqual(g.index.array, new Uint16Array([0, 1, 2, 0, 2, 3]));
  for (const k of ['P', 'N', 'U', 'C', 'T', 'I']) { assert.equal(cb[k].length, 0); assert.equal(cb[k].a.byteLength, 0); }
  assert.equal(cb.build(), null); write(); sameGeometry(g, cb.build());
});
