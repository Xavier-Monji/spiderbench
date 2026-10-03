// Exact per-location cache. Mobile has ONE shadow matrix, so the old "arrays longer than 16" cache did
// not cover it. Cache this named 16-value uniform too, without comparing every moving model/view matrix.
export function installUniformCache(renderer, { singleShadow = true } = {}) {
  const gl = renderer.getContext(); if (!gl || gl.__uCache) return;
  gl.__uCache = true;
  const last = new WeakMap(), shadowLocations = new WeakSet();
  const stats = gl.__uCacheStats = { uploads: 0, skipped: 0 };
  if (singleShadow && gl.getUniformLocation) {
    const original = gl.getUniformLocation.bind(gl);
    gl.getUniformLocation = function (program, name) {
      const location = original(program, name);
      if (location && /^directionalShadowMatrix(?:\[\d+\])?$/.test(name)) shadowLocations.add(location);
      return location;
    };
  }
  for (const fn of ['uniformMatrix4fv', 'uniformMatrix3fv']) {
    const original = gl[fn].bind(gl);
    gl[fn] = function (location, transpose, data, srcOffset, srcLength) {
      if (location && transpose === false && data && srcOffset === undefined
        && (data.length > 16 || (data.length === 16 && shadowLocations.has(location)))) {
        const prev = last.get(location);
        if (prev && prev.length === data.length) {
          let same = true;
          for (let i = 0; i < data.length; i++) if (prev[i] !== data[i]) { same = false; break; }
          if (same) { stats.skipped++; return; }
          prev.set(data);
        } else last.set(location, Float32Array.from(data));
      }
      stats.uploads++;
      return srcOffset === undefined ? original(location, transpose, data)
        : original(location, transpose, data, srcOffset, srcLength);
    };
  }
}
