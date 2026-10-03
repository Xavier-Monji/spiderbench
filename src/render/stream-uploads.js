// Preallocate streamed VBOs and upload bounded byte slices through COPY_WRITE_BUFFER (does not disturb
// THREE's current VAO / vertex / index bindings). GLBufferAttribute reuses the completed VBOs exactly;
// no second automatic bufferData upload when the tile first appears. CPU bounds/collision are unchanged.
import * as THREE from 'three';
const states = new WeakMap();
const typeOf = (gl, a) => {
  if (a.isFloat16BufferAttribute) return gl.HALF_FLOAT;
  if (a.array instanceof Float32Array) return gl.FLOAT;
  if (a.array instanceof Int16Array) return gl.SHORT;
  if (a.array instanceof Uint16Array) return gl.UNSIGNED_SHORT;
  if (a.array instanceof Uint32Array) return gl.UNSIGNED_INT;
  if (a.array instanceof Int32Array) return gl.INT;
  if (a.array instanceof Uint8Array) return gl.UNSIGNED_BYTE;
  if (a.array instanceof Int8Array) return gl.BYTE;
  throw Error('Unsupported streamed VBO type');
};
export function getStreamUploads(renderer, { maxBytesPerFrame = 256 * 1024 } = {}) {
  if (states.has(renderer)) return states.get(renderer);
  const gl = renderer.getContext(), jobs = new WeakMap(), hooked = new WeakSet();
  const stats = { bytes: 0, completed: 0, cancelled: 0, releases: 0, frameBytes: 0, frameAllocations: 0, maxFrameBytes: 0 };
  let remaining = maxBytesPerFrame, byRole = {}, indexVao = null, generation = 0;
  const roleShare = { facade: .5, roof: .375, detail: .125 };
  function release(g) {
    const job = jobs.get(g); if (!job || job.released) return;
    job.released = true;
    if (job.generation === generation) for (const item of job.items) if (item.buffer) gl.deleteBuffer(item.buffer);
    jobs.delete(g); stats.releases++; if (job.cursor < job.items.length) stats.cancelled++;
  }
  const api = {
    beginFrame() {
      remaining = maxBytesPerFrame; stats.frameBytes = stats.frameAllocations = 0;
      byRole = Object.fromEntries(Object.entries(roleShare).map(([k, f]) => [k, Math.floor(maxBytesPerFrame * f)]));
    },
    get stats() { return { ...stats, maxBytesPerFrame }; },
    release,
    warm(g) {
      if (g.userData.streaming?.gpuReady) return false;
      if (!g.userData.streaming?.ready) return false;
      let job = jobs.get(g);
      if (!job) {
        if (!g.boundingBox) g.computeBoundingBox(); if (!g.boundingSphere) g.computeBoundingSphere();
        const items = Object.entries(g.attributes).map(([key, a]) => ({ key, a, offset: 0, buffer: null, attribute: null }));
        if (g.index) items.push({ key: '#index', a: g.index, offset: 0, buffer: null, attribute: null });
        job = { items, cursor: 0, released: false, generation }; jobs.set(g, job);
        if (!hooked.has(g)) { g.addEventListener('dispose', () => release(g)); hooked.add(g); }
      }
      const role = g.userData.streaming.recipe?.role ?? 'facade';
      const share = byRole[role] ?? remaining;
      if (remaining <= 0 || share <= 0) return true;
      const item = job.items[job.cursor];
      if (!item) return false;
      if (!item.buffer) {
        // Allocate at most one buffer per frame across all facade/roof/detail batches.
        if (stats.frameAllocations) return true;
        item.buffer = gl.createBuffer();
        if (item.key === '#index') {
          // WebGL tags a buffer's initial binding class. COPY_WRITE first would tag it as non-index,
          // making later ELEMENT_ARRAY_BUFFER draws invalid. Use a private VAO for the initial tag.
          const vao = gl.getParameter(gl.VERTEX_ARRAY_BINDING); indexVao ??= gl.createVertexArray();
          gl.bindVertexArray(indexVao); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, item.buffer);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null); gl.bindVertexArray(vao);
        }
        gl.bindBuffer(gl.COPY_WRITE_BUFFER, item.buffer);
        gl.bufferData(gl.COPY_WRITE_BUFFER, item.a.array.byteLength, gl.STATIC_DRAW); stats.frameAllocations++;
      } else gl.bindBuffer(gl.COPY_WRITE_BUFFER, item.buffer);
      const array = item.a.array, n = Math.min(remaining, share, array.byteLength - item.offset);
      if (n) gl.bufferSubData(gl.COPY_WRITE_BUFFER, item.offset, new Uint8Array(array.buffer, array.byteOffset + item.offset, n));
      gl.bindBuffer(gl.COPY_WRITE_BUFFER, null);
      item.offset += n; remaining -= n; byRole[role] = share - n; stats.bytes += n; stats.frameBytes += n;
      stats.maxFrameBytes = Math.max(stats.maxFrameBytes, stats.frameBytes);
      if (item.offset === array.byteLength) {
        item.attribute = new THREE.GLBufferAttribute(item.buffer, typeOf(gl, item.a), item.a.itemSize,
          array.BYTES_PER_ELEMENT, item.a.count, item.a.normalized);
        item.attribute.gpuType = item.a.gpuType; job.cursor++;
      }
      if (job.cursor === job.items.length) {
        for (const item of job.items) {
          if (item.key === '#index') g.setIndex(item.attribute); else g.setAttribute(item.key, item.attribute);
          item.a = null; // relinquish large CPU attribute arrays after the completed VBO takes ownership
        }
        g.userData.streaming.gpuReady = true; stats.completed++;
      }
      return true;
    },
  };
  renderer.domElement?.addEventListener('webglcontextrestored', () => { generation++; indexVao = null; api.beginFrame(); });
  states.set(renderer, api); return api;
}
export function beginStreamUploads(renderer) { states.get(renderer)?.beginFrame(); }
