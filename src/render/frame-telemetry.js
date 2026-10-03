// Actual game-frame submission intervals, not a synthetic reciprocal of JS time or a counter capped at 30.
// Bounded ring; statistics/DOM are updated only four times/second, no network uploads.
export class FrameTelemetry {
  constructor({ capacity = 240, windowMs = 3000, now = () => performance.now() } = {}) {
    this.capacity = capacity; this.windowMs = windowMs; this.now = now;
    this.samples = new Float64Array(capacity * 4); this.parts = new Map(); this.latest = new Map(); this.reset();
  }
  reset() { this.n = this.cursor = 0; this.cpuMs = this.submitMs = 0; this.latest.clear(); }
  beginFrame() { for (const name of this.latest.keys()) this.latest.set(name, 0); }
  part(name, ms) {
    if (!this.parts.has(name)) this.parts.set(name, new Float64Array(this.capacity));
    this.latest.set(name, (this.latest.get(name) || 0) + ms);
  }
  cpu(ms) { this.cpuMs = ms; }
  submit(ms) { this.submitMs = ms; }
  observe(dt, mode = 'play') {
    if (mode !== 'play' || !Number.isFinite(dt) || dt <= 0 || dt > 2) return;
    for (const [name, values] of this.parts) values[this.cursor] = this.latest.get(name) || 0;
    const i = this.cursor * 4;
    this.samples[i] = this.now(); this.samples[i + 1] = dt * 1000;
    this.samples[i + 2] = this.cpuMs; this.samples[i + 3] = this.submitMs;
    this.cursor = (this.cursor + 1) % this.capacity; this.n = Math.min(this.capacity, this.n + 1);
  }
  report() {
    const cutoff = this.now() - this.windowMs, intervals = [], ids = []; let cpu = 0, submit = 0, total = 0, long = 0;
    for (let k = 0; k < this.n; k++) {
      const i = ((this.cursor - 1 - k + this.capacity) % this.capacity) * 4;
      if (this.samples[i] < cutoff) break;
      ids.push(i / 4);
      const ms = this.samples[i + 1]; intervals.push(ms); total += ms;
      cpu += this.samples[i + 2]; submit += this.samples[i + 3]; if (ms > 66.7) long++;
    }
    if (!intervals.length) return { samples: 0, fps: null, cpuMs: null, submitMs: null, p95Ms: null, maxMs: null, longFrames: 0 };
    intervals.sort((a, b) => a - b); const n = intervals.length;
    const parts = {};
    for (const [name, values] of this.parts) { let sum = 0, max = 0;
      for (const id of ids) { sum += values[id]; max = Math.max(max, values[id]); }
      parts[name] = { meanMs: sum / n, maxMs: max };
    }
    return { parts, samples: n, fps: n * 1000 / total, cpuMs: cpu / n, submitMs: submit / n,
      p95Ms: intervals[Math.min(n - 1, Math.floor(n * .95))], maxMs: intervals[n - 1], longFrames: long };
  }
}
