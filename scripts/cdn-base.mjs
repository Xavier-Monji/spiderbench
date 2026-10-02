import { readFileSync } from 'node:fs';

export const SESSION_BRANCH = 'arena/01a0fb2b-spiderbench';
export const CDN_REPOSITORY = 'Xavier-Monji/spiderbench';

export function validateCdnBase(base) {
  const url = new URL(base);
  if (url.protocol !== 'https:' || url.hostname !== 'cdn.jsdelivr.net' || url.username || url.password
      || url.search || url.hash || !/^\/(gh|npm)\/.+\/$/.test(url.pathname)) {
    throw new Error('CDN_BASE must be an absolute jsDelivr URL without a query/fragment, ending in /');
  }
  return url.href;
}

export function resolveCdnBase(env = process.env) {
  if (env.CDN_BASE) return validateCdnBase(env.CDN_BASE);
  let release;
  try { release = JSON.parse(readFileSync(new URL('../deployment/release.json', import.meta.url), 'utf8')); } catch {}
  const ref = env.CDN_REF || release?.commit || SESSION_BRANCH;
  return validateCdnBase(`https://cdn.jsdelivr.net/gh/${CDN_REPOSITORY}@${encodeURIComponent(ref)}/dist/`);
}
