// CSS-size-independent backing-store budget; a Retina iPad must not allocate desktop-sized post buffers.
export function boundedPixelRatio({ width, height, devicePixelRatio = 1, scale = 1, quality }) {
  const cap = quality.pixelRatioCap ?? 1.5;
  const ratio = Math.min(devicePixelRatio, cap) * scale;
  const budget = quality.maxBufferPixels ?? Infinity;
  return Math.min(ratio, Math.sqrt(budget / Math.max(1, width * height)));
}

// Fast down / slow up. A severely overloaded 4-10 FPS device must not be mistaken for a suspended tab:
// the old dt > .25 reset + 90-frame gate prevented adaptation exactly when it was needed most.
export class ResolutionGovernor {
  constructor(quality, scale = quality.renderScale ?? 1) {
    this.quality = quality; this.ceiling = scale; this.scale = scale; this.reset();
  }
  reset() { this.elapsed = 0; this.samples = 0; this.fast = 0; this.cooldown = 1; this.lastFps = null; }
  setCeiling(scale) {
    this.ceiling = Math.min(this.quality.mobile ? 1 : 2, Math.max(this.quality.minRenderScale ?? 0.3, scale));
    this.scale = this.ceiling; this.reset();
  }
  observe(dt) {
    if (!this.quality.mobile || !Number.isFinite(dt) || dt <= 0 || dt > 2) { this.reset(); return false; }
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.elapsed += dt; this.samples++;
    if (this.elapsed < 1.5 || this.samples < 4) return false;
    const fps = this.lastFps = this.samples / this.elapsed;
    this.elapsed = 0; this.samples = 0;
    this.fast = fps > 29 ? this.fast + 1 : 0;
    if (this.cooldown) return false;
    const prev = this.scale;
    if (fps < 27) {
      const estimate = this.scale * Math.sqrt(fps / (this.quality.targetFps || 30)) * .98;
      this.scale = Math.max(this.quality.minRenderScale, this.scale - .18, Math.min(this.scale - .025, estimate));
    } else if (this.fast >= 10) this.scale = Math.min(this.ceiling, this.scale + .025);
    if (Math.abs(this.scale - prev) < .001) return false;
    this.cooldown = this.scale < prev ? 2 : 12; this.fast = 0;
    return true;
  }
}

export function createResolutionController(renderer, quality) {
  const params = new URLSearchParams(globalThis.location?.search ?? '');
  const requested = Number(params.get('scale'));
  const initial = params.has('scale') && Number.isFinite(requested) && requested > 0 ? requested : quality.renderScale ?? 1;
  const governor = new ResolutionGovernor(quality);
  governor.setCeiling(initial);
  let pipeline;
  function resize() {
    const pr = boundedPixelRatio({ width: innerWidth, height: innerHeight,
      devicePixelRatio: globalThis.devicePixelRatio || 1, scale: governor.scale, quality });
    renderer.setPixelRatio(pr); renderer.setSize(innerWidth, innerHeight);
    pipeline?.setSize(innerWidth, innerHeight);
    globalThis.__ctx?.framePolicy?.invalidate();
  }
  resize();
  return {
    governor, resize,
    attach(p) { pipeline = p; },
    setUserScale(factor = 1) { governor.setCeiling(initial * (Number.isFinite(factor) ? factor : 1)); resize(); },
    observeFrame(dt) { if (governor.observe(dt)) resize(); },
    reset() { governor.reset(); },
    get scale() { return governor.scale; },
  };
}
