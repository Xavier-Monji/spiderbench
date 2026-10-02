import { GrowBuffer } from './buffer.js';

// Array-compatible indexed access for the legacy solid emitters, without Number[] doubles/capacity overhead.
// Bound methods bypass Proxy traps inside push()/iteration; only external numeric reads/writes need a trap.
export function indexedBuffer(Type = Float32Array) {
  const buffer = new GrowBuffer(Type), bound = new Map();
  const numeric = k => typeof k === 'string' && k.length && k[0] >= '0' && k[0] <= '9';
  return new Proxy(buffer, {
    get(target, key) {
      if (numeric(key)) return target.a[Number(key)];
      const value = target[key];
      if (typeof value !== 'function') return value;
      if (!bound.has(key)) bound.set(key, value.bind(target));
      return bound.get(key);
    },
    set(target, key, value) {
      if (numeric(key)) { target.a[Number(key)] = value; return true; }
      target[key] = value; return true;
    },
  });
}
