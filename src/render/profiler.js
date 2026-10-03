// OWNER: render agent. GPU pass timing with EXT_disjoint_timer_query_webgl2 (enabled with ?prof=1).
export class GpuProfiler {
  constructor(renderer, enabled) {
    this.gl = renderer.getContext();
    this.ext = enabled ? this.gl.getExtension('EXT_disjoint_timer_query_webgl2') : null;
    this.enabled = !!this.ext;
    this.pending = [];   // {name, q}
    this.free = [];
    this.current = null;
    this.acc = {};       // name -> {sum, n}
    this.last = {};
  }
  setEnabled(enabled) {
    if (enabled && !this.ext) this.ext = this.gl.getExtension('EXT_disjoint_timer_query_webgl2');
    this.enabled = !!enabled && !!this.ext;
  }
  reset() {
    this.end(); for (const p of this.pending) this.gl.deleteQuery(p.q);
    for (const q of this.free) this.gl.deleteQuery(q);
    this.pending = []; this.free = []; this.acc = {}; this.current = null;
  }
  begin(name) {
    if (!this.enabled) return;
    this.end();
    if (this.pending.length >= 24) return; // profiling must never build an unbounded GPU query backlog
    const gl = this.gl;
    const q = this.free.pop() || gl.createQuery();
    gl.beginQuery(this.ext.TIME_ELAPSED_EXT, q);
    this.current = { name, q };
  }
  end() {
    if (!this.enabled || !this.current) return;
    this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);
    this.pending.push(this.current);
    this.current = null;
  }
  poll() {
    if (!this.enabled) return;
    const gl = this.gl;
    const disjoint = gl.getParameter(this.ext.GPU_DISJOINT_EXT);
    while (this.pending.length) {
      const p = this.pending[0];
      if (!gl.getQueryParameter(p.q, gl.QUERY_RESULT_AVAILABLE)) break;
      this.pending.shift();
      const ns = gl.getQueryParameter(p.q, gl.QUERY_RESULT);
      this.free.push(p.q);
      if (disjoint) continue;
      const a = this.acc[p.name] || (this.acc[p.name] = { sum: 0, n: 0, samples: [] });
      const ms = ns / 1e6; a.samples.push(ms); a.sum += ms;
      if (a.samples.length > 60) a.sum -= a.samples.shift(); a.n = a.samples.length;
    }
  }
  /** recent average ms per pass (bounded 60 samples), resettable */
  report(reset = false) {
    const out = {};
    let total = 0;
    for (const k in this.acc) { const a = this.acc[k]; out[k] = +(a.sum / Math.max(1, a.n)).toFixed(3); total += a.sum / Math.max(1, a.n); }
    out.total = +total.toFixed(3);
    if (reset) this.acc = {};
    return out;
  }
}
