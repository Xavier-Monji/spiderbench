import * as THREE from 'three';

// Positions, indices and world-space UVs remain full precision. Pack only normals, colours and small material
// parameters; this reduces both CPU residency and uploads without removing triangles or shifting silhouettes.
// Streaming uses the SAME conversion in short slices: large roof/facade finalization previously overran the
// nominal 3 ms update budget while Int16Array.from / Uint16Array.from converted an entire tile synchronously.
export function* compactGeometrySteps(g, cache = new WeakMap(), chunkSize = 8192) {
  chunkSize = Math.max(256, Math.floor(chunkSize) || 8192);
  for (const key of ['normal', 'color', 'aTint', 'aM', 'aPart']) {
    const a = g.attributes[key];
    if (!(a?.array instanceof Float32Array) || (['color', 'aTint', 'aM'].includes(key) && a.isInstancedBufferAttribute)) continue;
    if (cache.has(a)) { g.setAttribute(key, cache.get(a)); continue; }
    const Type = key === 'normal' ? Int16Array : key === 'aPart' ? Uint8Array : Uint16Array;
    const convert = key === 'normal' ? v => Math.round(Math.max(-1, Math.min(1, v)) * 32767)
      : key === 'aPart' ? v => v : THREE.DataUtils.toHalfFloat;
    const packed = new Type(a.array.length);
    for (let i = 0; i < packed.length;) {
      const end = Math.min(packed.length, i + chunkSize);
      for (; i < end; i++) packed[i] = convert(a.array[i]);
      if (i < packed.length) yield;
    }
    const attribute = key === 'normal' ? new THREE.BufferAttribute(packed, a.itemSize, true)
      : key === 'aPart' ? new THREE.BufferAttribute(packed, 1) : new THREE.Float16BufferAttribute(packed, a.itemSize);
    cache.set(a, attribute); g.setAttribute(key, attribute);
  }
  return g;
}

// Desktop/tools/construction retain the synchronous API and sharing semantics.
export function compactGeometry(g, cache = new WeakMap()) {
  const steps = compactGeometrySteps(g, cache); let s;
  do { s = steps.next(); } while (!s.done);
  return s.value;
}
