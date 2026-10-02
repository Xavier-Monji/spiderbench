// Keep compact construction recipes for distant tiles, not millions of expanded vertices. The very same
// builders are replayed as the camera approaches, in small CPU slices; geometry/collision precision is unchanged.
import * as THREE from 'three';
import { deflateSync, inflateSync, strToU8, strFromU8 } from 'fflate';
import { GrowBuffer } from './buffer.js';
import { compactGeometry } from '../render/geometry-budget.js';

// JSON snapshots avoid retaining recursively cloned JS arrays/objects for every distant tile. Read the source
// value before JSON's toJSON hook (notably Color.toJSON, which would quantize linear colour to a hex integer).
// Explicit markers preserve nested THREE values, undefined properties, sparse arrays, non-finite values and -0.
const snapshotTypes = ['Matrix4', 'Matrix3', 'Color', 'Vector2', 'Vector3', 'Quaternion'];
const tag = (type, data) => ({ $sb: data === undefined ? [type] : [type, data] });
const keyOf = (value, references, referenceIds) => JSON.stringify(value, function (key, v) {
  const source = this[key];
  if (source === undefined) return tag(Array.isArray(this) && !Object.hasOwn(this, key) ? 'hole' : 'undefined');
  if (typeof source === 'number' && (!Number.isFinite(source) || Object.is(source, -0))) return tag('number', String(Object.is(source, -0) ? '-0' : source));
  if (typeof source === 'function') {
    let id = referenceIds.get(source);
    if (id === undefined) { id = references.length; referenceIds.set(source, id); references.push(source); }
    return tag('reference', id);
  }
  if (source && typeof source === 'object') for (const type of snapshotTypes) {
    if (source?.['is' + type]) return tag(type, source.toArray());
  }
  // Escape user data that happens to have our marker name.
  if (source && typeof source === 'object' && Object.hasOwn(source, '$sb')) return tag('object', Object.entries(source));
  return v;
});
const HOLE = Symbol('recipe array hole');
function restoreSnapshot(key, references) {
  const restore = value => {
    if (!value || typeof value !== 'object') return value;
    if (value.$sb) {
      const [type, data] = value.$sb;
      if (type === 'undefined') return undefined;
      if (type === 'hole') return HOLE;
      if (type === 'number') return Number(data);
      if (type === 'reference') return references[data];
      if (type === 'object') return Object.fromEntries(data.map(([k, v]) => [k, restore(v)]));
      return new THREE[type]().fromArray(data.map(restore));
    }
    for (const k of Object.keys(value)) { const v = restore(value[k]); if (v === HOLE) delete value[k]; else value[k] = v; }
    return value;
  };
  return restore(JSON.parse(key));
}
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
    *expand(options = {}) {
      seal(); const builder = new Builder();
      for (const chunk of chunks) {
        const raw = inflateSync(chunk.data); let offset = 0, cursor = 0;
        const part = (n, Type) => { const a = raw.slice(offset, offset + n); offset += n; return new Type(a.buffer); };
        const lengths = chunk.lengths;
        const payload = { codes: part(lengths[0], Uint8Array), arities: part(lengths[1], Uint8Array),
          args: part(lengths[2], Uint8Array), numbers: part(lengths[3], Float64Array) };
        const snapshots = JSON.parse(strFromU8(inflateSync(chunk.snapshots))), restored = new Map();
        const object = id => { if (!restored.has(id)) restored.set(id, restoreSnapshot(snapshots[id], references)); return restored.get(id); };
        const readToken = () => { let n = 0, shift = 1, byte;
          do { byte = payload.args[cursor++]; n += (byte & 127) * shift; shift *= 128; } while (byte & 128);
          return n;
        };
        for (let i = 0; i < payload.codes.length; i++) {
          const args = [];
          for (let j = 0; j < payload.arities[i]; j++) {
            const t = readToken();
            args.push(t >= 8 ? (t & 1 ? object((t - 9) / 2) : payload.numbers[(t - 8) / 2])
              : t === 0 ? undefined : t === 1 ? true : t === 2 ? false : t === 3 ? null : -0);
          }
          builder[names[payload.codes[i]]](...args);
          if ((i & 63) === 63) yield;
        }
      }
      return builder.build({ ...options, consume: true });
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
      recipeBytes: entries.reduce((n, e) => n + e.s.recipe.bytes, 0), residentBytes, peakResidentBytes, maxResidentBytes }; },
  };
}
