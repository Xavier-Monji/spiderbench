import './performance.css';

export function createPerformancePanel(ctx, { visible = ctx.quality.mobile } = {}) {
  const panel = document.createElement('section'); panel.id = 'performance-panel'; panel.setAttribute('aria-label', 'Performance diagnostics');
  panel.innerHTML = '<div class="perf-values"></div><button class="perf-copy">COPY REPORT</button><textarea readonly hidden aria-label="Performance report"></textarea>';
  document.body.appendChild(panel);
  for (const ev of ['pointerdown', 'click', 'wheel']) panel.addEventListener(ev, e => e.stopPropagation());
  const values = panel.querySelector('.perf-values'), text = panel.querySelector('textarea');
  let timer = 0, shown = !!visible, lastText = '';
  function report() {
    const gl = ctx.renderer.getContext(), size = ctx.pipeline.size;
    return { format: 'spiderbench-performance-v1', time: new Date().toISOString(), mode: ctx.flow?.mode ?? 'play',
      frame: ctx.telemetry.report(), gpu: { available: ctx.pipeline.gpuProfilingSupported?.() ?? false, timings: ctx.pipeline.timings?.() ?? {} },
      render: ctx.pipeline.stats, resolution: { scale: ctx.resolution.scale, ...size, pixels: size.W * size.H },
      stream: ctx.world.streamer?.stats, poseAtlas: ctx.crowdPoses?.stats ?? null,
      device: { userAgent: navigator.userAgent, dpr: devicePixelRatio, renderer: gl.getParameter(gl.RENDERER),
        webglVersion: gl.getParameter(gl.VERSION), cpuCoresReported: navigator.hardwareConcurrency ?? null },
      caveat: 'FPS comes from real-time gameplay frame submission intervals, not a synthetic CPU reciprocal or confirmed display swaps. CPU excludes GL submission; submit is JavaScript API time, not GPU time. GPU unavailable means no timer extension, NOT zero GPU cost.' };
  }
  function setVisible(v) { shown = !!v; panel.hidden = !shown; ctx.pipeline.enableProfiling?.(shown); }
  panel.querySelector('.perf-copy').addEventListener('click', async () => {
    const value = JSON.stringify(report(), null, 2); text.value = value;
    try { await navigator.clipboard.writeText(value); } catch { text.hidden = false; text.focus(); text.select(); try { document.execCommand('copy'); } catch {} }
  });
  function update(dt = 0) {
    if (!shown || (timer -= dt) > 0) return; timer = .25;
    const f = ctx.telemetry.report(), r = ctx.pipeline.stats, size = ctx.pipeline.size;
    const fmt = v => v == null ? '—' : v.toFixed(1);
    const gpu = ctx.pipeline.gpuProfilingSupported?.() ? fmt(ctx.pipeline.timings?.().total) + ' ms' : 'N/A';
    const lines = [ ctx.flow?.mode && ctx.flow.mode !== 'play' ? 'MENU · cached background' : `${fmt(f.fps)} FPS / target 30`, `CPU ${fmt(f.cpuMs)} · submit ${fmt(f.submitMs)} ms`,
      `p95 ${fmt(f.p95Ms)} ms · GPU ${gpu}`, `${size.W}×${size.H} · ${r.calls} draws · ${(r.triangles/1e6).toFixed(2)}M tris`,
      `worker ${ctx.geometryWorker?.stats.state ?? 'off'} · ${ctx.geometryWorker?.stats.completed ?? 0} jobs` ];
    const content = lines.join('\n'); if (content !== lastText) { values.textContent = content; lastText = content; }
  }
  setVisible(shown); update();
  return { update, report, toggle() { setVisible(!shown); update(); }, get visible() { return shown; },
    dispose() { ctx.pipeline.enableProfiling?.(false); panel.remove(); } };
}
