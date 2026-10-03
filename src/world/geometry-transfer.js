import * as THREE from 'three';

// Transfer completed typed arrays, not THREE objects or a second copy of the city's expanded geometry.
export function packGeometry(g) {
  if (!g) return null;
  const attributes = {};
  for (const [name, a] of Object.entries(g.attributes)) {
    if (a.isInterleavedBufferAttribute || a.isInstancedBufferAttribute) throw Error('Streaming worker expects independent vertex attributes');
    attributes[name] = { array: a.array, itemSize: a.itemSize, normalized: a.normalized, half: !!a.isFloat16BufferAttribute };
  }
  return { attributes, index: g.index?.array ?? null, groups: g.groups,
    box: g.boundingBox ? [...g.boundingBox.min.toArray(), ...g.boundingBox.max.toArray()] : null,
    sphere: g.boundingSphere ? [...g.boundingSphere.center.toArray(), g.boundingSphere.radius] : null,
    drawRange: g.drawRange };
}
export function geometryTransferables(packet) {
  if (!packet) return [];
  const buffers = new Set(Object.values(packet.attributes).map(a => a.array.buffer));
  if (packet.index) buffers.add(packet.index.buffer);
  return [...buffers];
}
export function unpackGeometry(packet) {
  if (!packet) return null;
  const g = new THREE.BufferGeometry();
  for (const [name, a] of Object.entries(packet.attributes)) {
    let attribute;
    if (a.half) {
      // THREE's Float16 constructor copies even a Uint16Array. Preserve transferred ownership while
      // retaining its decoding methods / isFloat16BufferAttribute flag (not a raw uint16 GPU attribute).
      attribute = new THREE.Float16BufferAttribute([], a.itemSize);
      attribute.array = a.array; attribute.count = a.array.length / a.itemSize;
    } else attribute = new THREE.BufferAttribute(a.array, a.itemSize, a.normalized);
    g.setAttribute(name, attribute);
  }
  if (packet.index) g.setIndex(new THREE.BufferAttribute(packet.index, 1));
  g.groups = packet.groups; g.drawRange = packet.drawRange;
  if (packet.box) g.boundingBox = new THREE.Box3(new THREE.Vector3().fromArray(packet.box), new THREE.Vector3().fromArray(packet.box, 3));
  if (packet.sphere) g.boundingSphere = new THREE.Sphere(new THREE.Vector3().fromArray(packet.sphere), packet.sphere[3]);
  return g;
}
