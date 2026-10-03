import * as THREE from 'three';
import { inflateSync, strFromU8 } from 'fflate';

// JSON snapshots avoid retaining recursively cloned JS arrays/objects for every distant tile. Read the source
// value before JSON's toJSON hook (notably Color.toJSON, which would quantize linear colour to a hex integer).
// Explicit markers preserve nested THREE values, undefined properties, sparse arrays, non-finite values and -0.
const snapshotTypes = ['Matrix4', 'Matrix3', 'Color', 'Vector2', 'Vector3', 'Quaternion'];
const tag = (type, data) => ({ $sb: data === undefined ? [type] : [type, data] });
export const keyOf = (value, references, referenceIds) => JSON.stringify(value, function (key, v) {
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
export function restoreSnapshot(key, references) {
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

// Shared by main-thread fallback and the single CPU geometry worker. Same argument precision, chunk boundaries
// and object snapshots; no simplified geometry, no serialized function references across threads.
export function* expandPacket(Builder, packet, options = {}, references = []) {
  const builder = new Builder();
      for (const chunk of packet.chunks) {
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
          builder[packet.names[payload.codes[i]]](...args);
          if ((i & 63) === 63) yield;
        }
      }
  return builder.build({ ...options, consume: true });
}
