// A fixed-size working set, not a FIFO of every eligible nearby recipe. Never replace a more valuable
// resident tile with a worse candidate just because that candidate finished building. Ranking includes
// distance, role and camera visibility; a hysteresis band prevents turn/boundary churn.
export function planAdmission(candidate, residents, residentBytes, maxBytes, bytes, margin = 16) {
  if (bytes > maxBytes) return null;
  let available = maxBytes - residentBytes;
  if (available >= bytes) return [];
  const victims = [];
  for (const entry of residents) {
    if (entry === candidate || entry.rank <= candidate.rank + margin) continue;
    victims.push(entry); available += entry.bytes;
    if (available >= bytes) return victims;
  }
  return null;
}

export function rankedResidents(entries) {
  return entries.filter(e => e.s.ready).sort((a, b) => b.rank - a.rank || a.order - b.order);
}
