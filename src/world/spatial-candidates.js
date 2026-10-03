// Conservative broadphase for the city's static crowd. The old loop tested every bench sitter/vendor in
// Manhattan each frame. Query nearby 64 m cells instead, in ORIGINAL array order. Path/prom walkers remain
// global candidates so their existing far-away advance and time-slicing are unchanged. No density/LOD cuts.
export class SpatialCandidates {
  constructor(items, { cellSize = 64, always = () => false } = {}) {
    this.items = items; this.cellSize = cellSize; this.always = always;
    this.cells = new Map(); this.records = new WeakMap(); this.moving = []; this.n = -1;
    this.indices = []; this.result = []; this.visited = new Uint32Array(0); this.stamp = 0;
  }
  key(item) { return `${Math.floor(item.x / this.cellSize)},${Math.floor(item.z / this.cellSize)}`; }
  rebuild() {
    this.cells.clear(); this.records = new WeakMap(); this.moving.length = 0;
    this.n = this.items.length; this.visited = new Uint32Array(this.n);
    for (let i = 0; i < this.n; i++) {
      const item = this.items[i], moving = this.always(item) || !Number.isFinite(item.x + item.z);
      const key = moving ? null : this.key(item), record = { index: i, key, moving };
      this.records.set(item, record);
      if (moving) this.moving.push(i);
      else { let cell = this.cells.get(key); if (!cell) this.cells.set(key, cell = []); cell.push(i); }
    }
  }
  // Call after a simulated item moves (including reactions / personal-space separation).
  update(item) {
    if (this.n !== this.items.length) { this.n = -1; return; }
    const record = this.records.get(item); if (!record) { this.n = -1; return; }
    const moving = this.always(item) || !Number.isFinite(item.x + item.z), key = moving ? null : this.key(item);
    if (record.key === key && record.moving === moving) return;
    const previous = record.moving ? this.moving : this.cells.get(record.key);
    const i = previous.indexOf(record.index); if (i >= 0) previous.splice(i, 1);
    if (!record.moving && !previous.length) this.cells.delete(record.key);
    record.key = key; record.moving = moving;
    if (moving) this.moving.push(record.index);
    else { let cell = this.cells.get(key); if (!cell) this.cells.set(key, cell = []); cell.push(record.index); }
  }
  invalidate() { this.n = -1; }
  query(x, z, radius) {
    if (!Number.isFinite(x + z + radius) || radius < 0) return this.items;
    if (this.n !== this.items.length) this.rebuild();
    if (++this.stamp >= 0xffffffff) { this.visited.fill(0); this.stamp = 1; }
    const indices = this.indices; indices.length = 0;
    const add = i => { if (this.visited[i] !== this.stamp) { this.visited[i] = this.stamp; indices.push(i); } };
    const C = this.cellSize;
    for (let gx = Math.floor((x - radius) / C); gx <= Math.floor((x + radius) / C); gx++)
      for (let gz = Math.floor((z - radius) / C); gz <= Math.floor((z + radius) / C); gz++) {
        const cell = this.cells.get(`${gx},${gz}`); if (cell) for (const i of cell) add(i);
      }
    for (const i of this.moving) add(i);
    indices.sort((a, b) => a - b);
    const result = this.result; result.length = 0;
    for (const i of indices) result.push(this.items[i]);
    return result;
  }
}
