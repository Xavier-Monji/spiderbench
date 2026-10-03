// Keep compact construction recipes for distant tiles, not millions of expanded vertices. The very same
// builders are replayed as the camera approaches, in small CPU slices; geometry/collision precision is unchanged.
import * as THREE from 'three';
import { deflateSync, strToU8 } from 'fflate';
import { keyOf, expandPacket } from './recipe-codec.js';
import { unpackGeometry } from './geometry-transfer.js';
import { planAdmission, rankedResidents } from './cache-admission.js';
import { GrowBuffer } from './buffer.js';
import { compactGeometry, compactGeometrySteps } from '../render/geometry-budget.js';

const bitCount = n => { let count = 0; for (let i = 0; i < 6; i++) count += !!(n & (1 << i)); return count; };
function detailVertices(name, a) {
  if (name === 'vert') return 1;
  if (name === 'box' || name === 'boxC') return bitCount(a[6] ?? 63) * 4;
  if (name === 'cyl') { const s = a[6] ?? 8, caps = a[7] ?? true;
    return 2 * (s + 1) + (caps ? ((a[3] > 0 ? s + 2 : 0) + (a[4] > 0 ? s + 2 : 0)) : 0); }
  if (name === 'tube') { const s = a[3] ?? 6; return 2 * (s + 1) + (a[4] && a[2] > 0 ? 2 * (s + 2) : 0); }
  return 0;
}

export function deferredBuilder(Builder, { methods, role, cx, cz, range, returns = {} }) {
  const names = [...methods, 'setColor', 'setPart', 'setXf'];
  const codes = new GrowBuffer(Uint8Array), arities = new GrowBuffer(Uint8Array);
  // Lossless dictionaries: repeated coordinates/heights consume a short varint, not another Float64.
  // Type-only arguments (undefined/bools/null) have no wasted 8-byte value slot.
  const args = new GrowBuffer(Uint8Array), numbers = new GrowBuffer(Float64Array);
  let objects = [], intern = new Map(), numericIntern = new Map(), sealed = false, commandCount = 0;
  const chunks = [];
  // Compress DURING construction. Keeping every tile's numeric/string dictionaries alive until the city is
  // finished can exceed a mobile JS heap even when the eventual compressed/resident geometry is small.
  const flushChunk = () => {
    if (!codes.length) return;
    const arrays = [codes, arities, args, numbers].map(b => b.take());
    const lengths = arrays.map(a => a.byteLength);
    const data = new Uint8Array(lengths.reduce((n, v) => n + v, 0)); let offset = 0;
    for (const a of arrays) { data.set(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), offset); offset += a.byteLength; }
    chunks.push({ data: deflateSync(data, { level: 1 }), snapshots: deflateSync(strToU8(JSON.stringify(objects)), { level: 1 }), lengths });
    for (const b of [codes, arities, args, numbers]) { b.a = new b.Type(0); b.length = 0; }
    objects = []; intern = new Map(); numericIntern = new Map();
  };
  const references = [], referenceIds = new Map();
  const token = n => { do { const byte = n % 128; n = Math.floor(n / 128); args.push(byte | (n ? 128 : 0)); } while (n); };
  const state = { v: 0, n: 0, color: [1, 1, 1], curPart: 0, xf: null };
  const record = (name, args) => {
    if (sealed) throw new Error('Cannot append to a sealed tile recipe');
    codes.push(names.indexOf(name)); arities.push(args.length); commandCount++;
    for (const arg of args) {
      if (typeof arg === 'number') {
        if (Object.is(arg, -0)) { token(4); continue; }
        let id = numericIntern.get(arg);
        if (id === undefined) { id = numbers.length; numbers.push(arg); if (numericIntern.size < 1024) numericIntern.set(arg, id); }
        token(8 + id * 2);
      } else if (arg === undefined) token(0);
      else if (arg === true) token(1);
      else if (arg === false) token(2);
      else if (arg === null) token(3);
      else {
        const key = keyOf(arg, references, referenceIds); let id = intern.get(key);
        if (id === undefined) { id = objects.length; objects.push(key); intern.set(key, id); }
        token(9 + id * 2);
      }
    }
    if (codes.length >= 512) flushChunk();
  };
  const seal = () => { if (!sealed) { flushChunk(); sealed = true;
    intern = numericIntern = null; objects = null; referenceIds.clear();
    for (const b of [codes, arities, args, numbers]) b.a = null;
  } };
  const recipe = {
    role, cx, cz, range,
    compress: seal,
    get bytes() { seal(); return chunks.reduce((n, c) => n + c.data.byteLength + c.snapshots.byteLength, 0); },
    get commands() { return commandCount; },
    // Structured-cloneable only when all arguments are data and the worker knows the builder.
    packet() {
      seal();
      if (references.length || !['MB', 'FacadeBuilder', 'RB'].includes(Builder.workerId)) return null;
      return { version: 1, builder: Builder.workerId, names, chunks, role };
    },
    *expand(options = {}) {
      seal(); return yield* expandPacket(Builder, { names, chunks }, options, references);
    },
  };
  let proxy;
  proxy = new Proxy(state, {
    get(target, name) {
      if (name === 'recipe') return recipe;
      if (name === 'build') return (options = {}) => {
        seal(); if (!target.n && !target.v) return null;
        const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(0), 3));
        g.setIndex(new THREE.BufferAttribute(new Uint16Array(0), 1));
        g.boundingBox = new THREE.Box3(new THREE.Vector3(cx - 128, 0, cz - 128), new THREE.Vector3(cx + 128, 450, cz + 128));
        g.boundingSphere = new THREE.Sphere(new THREE.Vector3(cx, 225, cz), 320);
        g.userData.streaming = { recipe, options, ready: false, gpuReady: false }; return g;
      };
      if (name === 'with') return (matrix, fn) => {
        const prev = target.xf; proxy.setXf(prev ? prev.clone().multiply(matrix) : matrix);
        fn(proxy); proxy.setXf(prev); return proxy;
      };
      if (['setColor', 'setPart', 'setXf'].includes(name)) return (...args) => {
        record(name, args); Builder.prototype[name].apply(target, args); return proxy;
      };
      if (methods.includes(name)) return (...args) => {
        const first = target.v; record(name, args); target.n++;
        if (role === 'detail') target.v += detailVertices(name, args);
        if (returns[name]) return returns[name](...args);
        return name === 'vert' ? first : proxy;
      };
      return target[name];
    },
    set(target, name, value) {
      if (name === 'xf') record('setXf', [value]);
      target[name] = value; return true;
    },
  });
  return proxy;
}

const distance = (p, r) => Math.hypot(Math.max(0, Math.abs(p.x - r.cx) - 128), Math.max(0, Math.abs(p.z - r.cz) - 128));
const geometryBytes = g => Object.values(g.attributes).reduce((n, a) => n + a.array.byteLength, g.index?.array.byteLength || 0);
export function createGeometryStreamer(scene, { budgetMs = 3, maxResidentBytes = 64 * 1048576 } = {}) {
  const entries = [];
  scene.traverse(m => { const g = m.geometry, s = g?.userData.streaming; if (s) entries.push({ g, s, bytes: 0, d: Infinity, rank: Infinity, order: entries.length, loads: 0 }); });
  let job = null, residentBytes = 0, peakResidentBytes = 0, worker = null;
  const legacy = new URLSearchParams(globalThis.location?.search ?? '').has('noruntimecache');
  const admission = !legacy && !new URLSearchParams(globalThis.location?.search ?? '').has('nostreamadmission');
  const counters = { builds: 0, admissions: 0, evictions: 0, budgetRejects: 0, repeatBuilds: 0 };
  let lastScan = -Infinity, lastX = Infinity, lastZ = Infinity, residents = [];
  const frustum = new THREE.Frustum(), projection = new THREE.Matrix4();
  const priority = { facade: 0, roof: 5, detail: 30, roofAO: 50, roofStreaks: 60 };
  function evict(entry) {
    if (!entry.s.ready) return;
    counters.evictions++;
    entry.g.dispose(); entry.g.attributes = {};
    entry.g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(0), 3));
    entry.g.setIndex(new THREE.BufferAttribute(new Uint16Array(0), 1)); entry.g.clearGroups();
    entry.s.ready = false; entry.s.gpuReady = false; entry.s.version = (entry.s.version ?? 0) + 1; residentBytes -= entry.bytes;
  }
  function* expandEntry(entry) {
    const g = yield* entry.s.recipe.expand(entry.s.options);
    if (g) yield* compactGeometrySteps(g);
    return g;
  }
  function update(p, budget = budgetMs, camera = null) {
    const now = performance.now();
    const scan = !admission || now - lastScan >= 100 || (p.x - lastX) ** 2 + (p.z - lastZ) ** 2 >= 24 ** 2;
    if (scan) {
      lastScan = now; lastX = p.x; lastZ = p.z;
      if (camera) { camera.updateMatrixWorld(); projection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
        frustum.setFromProjectionMatrix(projection, camera.coordinateSystem, camera.reversedDepth); }
      for (const e of entries) {
        e.d = distance(p, e.s.recipe);
        const visible = !camera || e.d < 140 || !e.g.boundingSphere || frustum.intersectsSphere(e.g.boundingSphere);
        e.rank = e.d + (priority[e.s.recipe.role] ?? 60) + (visible ? 0 : 384);
        if (e.rank < (e.blockedRank ?? -Infinity) - 16) { e.blockedUntil = 0; e.blockedRank = -Infinity; }
        if (e.d > e.s.recipe.range + 256) { evict(e); if (job?.entry === e) { if (job.workerId) worker?.cancel(job.workerId); job = null; } }
      }
      residents = rankedResidents(entries);
    }
    while (performance.now() - now < budget) {
      if (!job) {
        if (admission && !scan) break;
        // Linear stable minimum: identical distance/role priority and tie order, without a filter + sort
        // allocation over ~926 recipes for every job. Keep the developer A/B path for runtime profiling.
        let next = null, score = Infinity;
        if (legacy) next = entries.filter(e => !e.s.ready && e.d < e.s.recipe.range + 96 && (e.blockedUntil ?? 0) < now)
          .sort((a, b) => (a.d + (priority[a.s.recipe.role] ?? 60)) - (b.d + (priority[b.s.recipe.role] ?? 60)))[0];
        else for (const e of entries) {
          if (e.s.ready || e.d >= e.s.recipe.range + 96 || (e.blockedUntil ?? 0) >= now) continue;
          const value = admission ? e.rank : e.d + (priority[e.s.recipe.role] ?? 60);
          if (admission) {
            if (e.bytes && !planAdmission(e, residents, residentBytes, maxResidentBytes, e.bytes)) continue;
            if (!e.bytes && maxResidentBytes - residentBytes < maxResidentBytes * .1
              && !residents.some(r => r.rank > e.rank + 16)) continue;
          }
          if (value < score) { score = value; next = e; }
        }
        if (!next) break;
        counters.builds++; if (next.loads) counters.repeatBuilds++;
        const packet = !legacy && worker ? next.s.recipe.packet?.() : null;
        if (packet && next.s.recipe.bytes <= 8 * 1048576 && worker.available) {
          const task = worker.submit(packet, next.s.options);
          if (task) {
            const work = job = { entry: next, workerId: task.id, packet: undefined, error: null };
            task.promise.then(result => { if (job === work) work.packet = result; }, error => { if (job === work) work.error = error; });
            break;
          }
        }
        // A cancelled worker still owns one build; do not queue another build/copy behind it.
        if (packet && worker.busy) break;
        job = { entry: next, iterator: legacy ? next.s.recipe.expand(next.s.options) : expandEntry(next) };
      }
      if (job.workerId && job.error) { job = { entry: job.entry, iterator: expandEntry(job.entry) }; }
      if (job.workerId && job.packet === undefined) break;
      const result = job.workerId ? { done: true, value: unpackGeometry(job.packet) } : job.iterator.next();
      if (result.done) {
        const e = job.entry, g = result.value; job = null;
        if (!g) { e.s.ready = true; continue; }
        if (legacy) compactGeometry(g);
        e.bytes = geometryBytes(g);
        if (e.bytes > maxResidentBytes) { e.blockedUntil = now + 60000; continue; }
        if (admission) {
          const victims = planAdmission(e, residents, residentBytes, maxResidentBytes, e.bytes);
          if (!victims) { counters.budgetRejects++; e.blockedUntil = now + 1000; e.blockedRank = e.rank; g.dispose(); continue; }
          for (const cold of victims) { evict(cold); cold.blockedUntil = now + 1000; cold.blockedRank = cold.rank; }
        }
        // Developer reference path retains the old unconditional farthest-first eviction.
        while (!admission && residentBytes + e.bytes > maxResidentBytes) {
          let cold = null;
          for (const c of entries) if (c.s.ready && c !== e && (!cold || c.d > cold.d)) cold = c;
          if (!cold) break;
          evict(cold); cold.blockedUntil = now + 3000;
        }
        e.g.dispose(); e.g.attributes = g.attributes; e.g.index = g.index;
        e.g.boundingBox = g.boundingBox; e.g.boundingSphere = g.boundingSphere; e.g.groups = g.groups;
        e.s.ready = true; e.s.gpuReady = false; e.s.version = (e.s.version ?? 0) + 1; residentBytes += e.bytes; peakResidentBytes = Math.max(peakResidentBytes, residentBytes);
        e.loads++; counters.admissions++; if (admission) residents = rankedResidents(entries);
      }
    }
  }
  return {
    update,
    setWorker(client) { worker = client; },
    resetGpu() { for (const e of entries) evict(e); if (job?.workerId) worker?.cancel(job.workerId); job = null; lastScan = -Infinity; residents = []; },
    async prime(p, { maxBytes = Math.min(maxResidentBytes, 24 * 1048576), maxTiles = 12, radius = 160 } = {}) {
      // Only the spawn neighbourhood is expanded before play. Do not fill the entire runtime budget at boot,
      // and never mark all buffers GPU-ready: batchTiles uploads one attribute at a time behind the LOD fallback.
      const deadline = performance.now() + 2500;
      while (residentBytes < maxBytes && entries.filter(e => e.s.ready).length < maxTiles
        && entries.some(e => !e.s.ready && distance(p, e.s.recipe) < Math.min(radius, e.s.recipe.range))) {
        update(p, 3); await new Promise(r => setTimeout(r, 0));
        if (performance.now() > deadline || entries.some(e => e.blockedUntil > performance.now())) break;
      }
    },
    get stats() { return { tiles: entries.length, ready: entries.filter(e => e.s.ready).length,
      recipeBytes: entries.reduce((n, e) => n + e.s.recipe.bytes, 0), residentBytes, peakResidentBytes, maxResidentBytes, worker: worker?.stats ?? null, cache: { ...counters } }; },
  };
}
