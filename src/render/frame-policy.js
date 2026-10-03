// Keep the last graded 3D image underneath opaque mobile menus. UI/audio/gamepad updates still run;
// only world simulation, LOD selection, shadows and the full scene/post pipeline are skipped.
// Re-presenting the existing RT (one FXAA draw) is required: Safari may discard a WebGL drawing buffer.
const STATIC_PAGES = new Set(['map', 'skills', 'collectibles', 'settings']);
export function createFramePolicy(ctx, { enabled = ctx.quality?.mobile && !new URLSearchParams(globalThis.location?.search ?? '').has('noruntimecache') } = {}) {
  let revision = 0, renderedRevision = -1, renderedKey = null;
  const stats = { worldFrames: 0, cachedFrames: 0 };
  function key() {
    const pause = ctx.sys?.pause;
    return enabled && ctx.pipeline.present && ctx.flow?.mode === 'menu' && !ctx.flow.overlay
      && pause?.open && STATIC_PAGES.has(pause.tab) ? pause.tab : null;
  }
  return {
    invalidate() { revision++; },
    needsWorldFrame() { const k = key(); return !k || k !== renderedKey || revision !== renderedRevision; },
    rendered() { renderedKey = key(); renderedRevision = revision; stats.worldFrames++; },
    presented() { stats.cachedFrames++; },
    get stats() { return { ...stats }; },
  };
}

// Retain the original player -> world -> lighting -> HUD -> systems order. A gamepad/system may leave the
// menu during systems.update: recheck afterwards so Resume / Suits / Photo Mode never display a stale frame.
export function stepGameFrame(ctx, dt) {
  const policy = ctx.framePolicy;
  const clock = ctx.telemetry, start = clock ? performance.now() : 0;
  clock?.beginFrame();
  const timed = (name, fn) => { if (!clock) return fn(); const t = performance.now(); fn(); clock.part(name, performance.now() - t); };
  const updateWorld = () => {
    timed('player', () => ctx.player.update(dt)); timed('world', () => ctx.world.update(dt, ctx.camera));
    timed('lighting', () => ctx.lighting.update(ctx.camera)); timed('hud', () => ctx.hud.update(dt));
  };
  let updated = !policy || policy.needsWorldFrame();
  if (updated) updateWorld();
  timed('systems', () => { for (const s of ctx.systems) s.update?.(dt); });
  if (!updated && policy.needsWorldFrame()) { updateWorld(); updated = true; }
  if (clock) clock.cpu(performance.now() - start);
  const submitStart = clock ? performance.now() : 0;
  if (updated) { ctx.pipeline.render(dt); timed('shaderWarmup', () => ctx.warmup?.step()); policy?.rendered(); }
  else { ctx.pipeline.present(); policy.presented(); }
  if (clock) clock.submit(performance.now() - submitStart);
}
