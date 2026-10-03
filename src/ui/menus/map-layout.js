// Cache calculations, NOT animation: map noise, routes, pulses, labels and icons still draw at the original
// resolution/rate. Only pan/zoom/state/panel-layout changes redo the expensive icon/label placement.
export function createLayoutCache({ enabled = true } = {}) {
  let keys, value;
  const stats = { builds: 0, hits: 0 };
  return {
    get(nextKeys, build) {
      if (enabled && keys?.length === nextKeys.length && keys.every((v, i) => Object.is(v, nextKeys[i]))) {
        stats.hits++; return value;
      }
      stats.builds++; keys = nextKeys.slice(); value = build(); return value;
    },
    clear() { keys = null; value = undefined; },
    get stats() { return { ...stats }; },
  };
}

export function projectMapIcons(items, project, size) {
  const proj = items.map(it => { const [X, Y] = project(it); return { it, X, Y }; }).sort((a, b) => a.Y - b.Y);
  const big = proj.filter(p => !p.it.small && !p.it.area), minD = size * 0.95;
  // Keep the same order / four relaxation passes, including off-screen icons: identical placement.
  for (let pass = 0; pass < 4; pass++) for (let i = 0; i < big.length; i++) for (let j = i + 1; j < big.length; j++) {
    const a = big[i], b = big[j]; let dx = b.X - a.X, dy = b.Y - a.Y; const d = Math.hypot(dx, dy);
    if (d >= minD) continue; if (d < 0.01) { dx = 1; dy = 0; }
    const k = (minD - d) / 2 / Math.max(d, 0.01);
    a.X -= dx * k; a.Y -= dy * k; b.X += dx * k; b.Y += dy * k;
  }
  return proj;
}
