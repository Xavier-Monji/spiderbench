// Phase-locked 30 Hz deadlines. Scheduling now + interval after a late RAF loses the original phase and
// can repeatedly turn a small scheduling delay into an extra skipped display refresh. Drop missed slots,
// never simulate catch-up frames, but keep the next slot on the original cadence.
export function nextFrameDeadline(previous, now, interval, tolerance = .75) {
  if (!interval) return 0;
  let next = previous ? previous + interval : now + interval;
  if (next <= now + tolerance) next += (Math.floor((now + tolerance - next) / interval) + 1) * interval;
  return next;
}
