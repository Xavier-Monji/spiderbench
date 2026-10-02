// Compact construction storage. Number[] is normally 8 bytes/value plus capacity slack; Float32 is 4.
// Geometries still own exact-size arrays after build(), so spare construction capacity is not retained on the GPU.
export class GrowBuffer {
  constructor(Type = Float32Array, capacity = 256) {
    this.Type = Type; this.a = new Type(capacity); this.length = 0;
  }
  push(...values) {
    const size = this.length + values.length;
    if (size > this.a.length) {
      const next = new this.Type(Math.max(size, Math.ceil(this.a.length * 1.5), 256));
      next.set(this.a.subarray(0, this.length)); this.a = next;
    }
    this.a.set(values, this.length); this.length = size;
  }
  get(index) { return this.a[index]; }
  set(index, value) { this.a[index] = value; }
  take(Type = this.Type) { return Type.from(this.a.subarray(0, this.length)); }
  *[Symbol.iterator]() { for (let i = 0; i < this.length; i++) yield this.a[i]; }
}
