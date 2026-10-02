// Keep compact construction recipes for distant tiles, not millions of expanded vertices. The very same
// builders are replayed as the camera approaches, in small CPU slices; geometry/collision precision is unchanged.
import * as THREE from 'three';
import { GrowBuffer } from './buffer.js';
import { compactGeometry } from '../render/geometry-budget.js';

const clone = value => value?.clone ? value.clone() : Array.isArray(value) ? value.map(clone)
  : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([k, v]) => [k, clone(v)])) : value;
const keyOf = value => (value?.constructor?.name || '') + JSON.stringify(value, (_, v) =>
  v === undefined ? { $undefined: true } : typeof v === 'number' && !Number.isFinite(v) ? { $number: String(v) } : v);
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
  const types = new GrowBuffer(Uint8Array), values = new GrowBuffer(Float64Array);
  let objects = [], intern = new Map(), sealed = false;
  const state = { v: 0, n: 0, color: [1, 1, 1], curPart: 0, xf: null };
  const record = (name, args) => {
    if (sealed) throw new Error('Cannot append to a sealed tile recipe');
    codes.push(names.indexOf(name)); arities.push(args.length);
    for (const arg of args) {
      if (typeof arg === 'number') { types.push(0); values.push(arg); }
      else if (arg === undefined) { types.push(2); values.push(0); }
      else if (arg === true || arg === false) { types.push(arg ? 3 : 4); values.push(0); }
      else if (arg === null) { types.push(5); values.push(0); }
      else {
        const key = keyOf(arg); let id = intern.get(key);
        if (id === undefined) { id = objects.length; objects.push(clone(arg)); intern.set(key, id); }
        types.push(1); values.push(id);
      }
    }
  };
  let packed;
  const seal = () => { if (!sealed) { sealed = true;
    packed = { codes: codes.take(), arities: arities.take(), types: types.take(), values: values.take() };
    for (const b of [codes, arities, types, values]) b.a = null;
    intern = null;
  } };
  const recipe = {
    role, cx, cz, range,
    get bytes() { seal(); return Object.values(packed).reduce((n, a) => n + a.byteLength, 0); },
    get commands() { return codes.length; },
    *expand(options = {}) {
      seal(); const builder = new Builder(); let cursor = 0;
      for (let i = 0; i < packed.codes.length; i++) {
        const args = [];
        for (let j = 0; j < packed.arities[i]; j++, cursor++) {
          const t = packed.types[cursor], v = packed.values[cursor];
          args.push(t === 0 ? v : t === 1 ? objects[v] : t === 2 ? undefined : t === 3 ? true : t === 4 ? false : null);
        }
        builder[names[packed.codes[i]]](...args);
        if ((i & 63) === 63) yield;
      }
      return builder.build(options);
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
export function createGeometryStreamer(scene, { budgetMs = 3, maxResidentBytes = 256 * 1048576 } = {}) {
  const entries = [];
  scene.traverse(m => { const g = m.geometry, s = g?.userData.streaming; if (s) entries.push({ g, s, bytes: 0, d: Infinity }); });
  let job = null, residentBytes = 0, peakResidentBytes = 0;
  const priority = { facade: 0, roof: 5, detail: 30, roofAO: 50, roofStreaks: 60 };
  function evict(entry) {
    if (!entry.s.ready) return;
    entry.g.dispose(); entry.g.attributes = {};
    entry.g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(0), 3));
    entry.g.setIndex(new THREE.BufferAttribute(new Uint16Array(0), 1)); entry.g.clearGroups();
    entry.s.ready = false; entry.s.gpuReady = false; entry.s.version = (entry.s.version ?? 0) + 1; residentBytes -= entry.bytes;
  }
  function update(p, budget = budgetMs) {
    const now = performance.now();
    for (const e of entries) {
      e.d = distance(p, e.s.recipe);
      if (e.d > e.s.recipe.range + 256) { evict(e); if (job?.entry === e) job = null; }
    }
    while (performance.now() - now < budget) {
      if (!job) {
        const next = entries.filter(e => !e.s.ready && e.d < e.s.recipe.range + 96 && (e.blockedUntil ?? 0) < now)
          .sort((a, b) => (a.d + (priority[a.s.recipe.role] ?? 60)) - (b.d + (priority[b.s.recipe.role] ?? 60)))[0];
        if (!next) break;
        job = { entry: next, iterator: next.s.recipe.expand(next.s.options) };
      }
      const result = job.iterator.next();
      if (result.done) {
        const e = job.entry, g = result.value; job = null;
        if (!g) { e.s.ready = true; continue; }
        compactGeometry(g);
        e.bytes = geometryBytes(g);
        if (e.bytes > maxResidentBytes) { e.blockedUntil = now + 60000; continue; }
        const cold = entries.filter(c => c.s.ready && c !== e).sort((a, b) => b.d - a.d);
        while (residentBytes + e.bytes > maxResidentBytes && cold.length) {
          const c = cold.shift(); evict(c); c.blockedUntil = now + 3000;
        }
        e.g.dispose(); e.g.attributes = g.attributes; e.g.index = g.index;
        e.g.boundingBox = g.boundingBox; e.g.boundingSphere = g.boundingSphere; e.g.groups = g.groups;
        e.s.ready = true; e.s.gpuReady = false; e.s.version = (e.s.version ?? 0) + 1; residentBytes += e.bytes; peakResidentBytes = Math.max(peakResidentBytes, residentBytes);
      }
    }
  }
  return {
    update,
    async prime(p) {
      // Before first frame, fill the visible range. Short slices give GC and the loading overlay breathing room.
      while (entries.some(e => !e.s.ready && distance(p, e.s.recipe) < e.s.recipe.range)) {
        update(p, 8); await new Promise(r => setTimeout(r, 0));
        if (entries.some(e => e.blockedUntil > performance.now())) break; // an unusually dense tile reached the cap
      }
      // Initial uploads happen behind the boot overlay; only later street streaming needs staged GPU warm-up.
      for (const e of entries) if (e.s.ready) e.s.gpuReady = true;
    },
    get stats() { return { tiles: entries.length, ready: entries.filter(e => e.s.ready).length,
      recipeBytes: entries.reduce((n, e) => n + e.s.recipe.bytes, 0), residentBytes, peakResidentBytes, maxResidentBytes }; },
  };
}
