// Distance-aware AI cadence. Animation clocks and visual transforms continue at the render rate.
// Interaction / danger near the player never uses a delayed pose. Stagger phases to avoid an AI burst.
export function crowdInterval(distance2, playerDistance2, urgent = false) {
  if (urgent || distance2 < 16 * 16 || playerDistance2 < 16 * 16) return 0;
  return distance2 < 80 * 80 ? .1 : distance2 < 220 * 220 ? .2 : .4;
}
export function cadenceStep(item, dt, interval) {
  if (interval === 0) { const elapsed = Math.min(.5, (item._simDebt || 0) + dt); item._simDebt = 0; item._simUntil = undefined; return elapsed; }
  if (item._simDebt === undefined) { item._simDebt = 0; item._simUntil = (((item.slot ?? item.seed ?? 0) % 16) + 1) / 16 * interval; }
  item._simDebt += dt;
  if (item._simDebt + 1e-9 < Math.min(item._simUntil ?? interval, interval)) return 0;
  const elapsed = Math.min(.5, item._simDebt); item._simDebt = 0; item._simUntil = undefined; return elapsed;
}
export const poseAlpha = (time, lastStep, interval) => interval > 0 ? Math.max(0, Math.min(1, (time - lastStep) / interval)) : 1;
export const lerpAngle = (from, to, alpha) => from + Math.atan2(Math.sin(to - from), Math.cos(to - from)) * alpha;
