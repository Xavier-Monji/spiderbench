import * as THREE from 'three';

// Positions, indices and world-space UVs remain full precision. Pack only normals, colours and small material
// parameters; this reduces both CPU residency and uploads without removing triangles or shifting silhouettes.
export function compactGeometry(g, cache = new WeakMap()) {
  const cached = (a, create) => { if (!cache.has(a)) cache.set(a, create()); return cache.get(a); };
  const normal = g.attributes.normal;
  if (normal?.array instanceof Float32Array) g.setAttribute('normal', cached(normal, () => new THREE.BufferAttribute(
    Int16Array.from(normal.array, v => Math.round(Math.max(-1, Math.min(1, v)) * 32767)), normal.itemSize, true)));
  for (const key of ['color', 'aTint', 'aM']) {
    const a = g.attributes[key];
    if (a?.array instanceof Float32Array && !a.isInstancedBufferAttribute) g.setAttribute(key, cached(a, () => new THREE.Float16BufferAttribute(
      Uint16Array.from(a.array, THREE.DataUtils.toHalfFloat), a.itemSize)));
  }
  const part = g.attributes.aPart;
  if (part?.array instanceof Float32Array) g.setAttribute('aPart', cached(part, () => new THREE.BufferAttribute(Uint8Array.from(part.array), 1)));
  return g;
}
