import { getQuality } from '../render/quality.js';
import { hasMobileAsset } from './mobile-assets.js';

export function resolveAssetUrl(path, { base = '/', mobile = false, mobileOnly = false } = {}) {
  if (typeof path !== 'string' || /^(data:|blob:)/i.test(path)) return path;
  base = base.endsWith('/') ? base : base + '/';
  // Accept both original /assets/... URLs and URLs already rebased by a loader/directory constant.
  const prefix = base + 'assets/';
  let asset;
  if (path.startsWith(prefix)) asset = path.slice(prefix.length);
  else if (path.startsWith('/assets/')) asset = path.slice(8);
  else if (path.startsWith('assets/')) asset = path.slice(7);
  else return path; // external/custom character URLs are not hijacked
  if (mobile && !mobileOnly && hasMobileAsset(asset)) asset = 'mobile/' + asset;
  return prefix + asset;
}

export function runtimeAssetBase(base = '/', moduleUrl = import.meta.url) {
  // Vite's portable production modules are in dist/assets/. data: has no directory of its own,
  // so fetch()/Three loaders must use the module's CDN URL, not location/document URL.
  return base === './' ? new URL('../', moduleUrl).href : base;
}

export function assetUrl(path) {
  return resolveAssetUrl(path, { base: runtimeAssetBase(import.meta.env?.BASE_URL || '/'), mobile: !!getQuality().mobile,
    mobileOnly: typeof __MOBILE_ASSETS_ONLY__ !== 'undefined' && __MOBILE_ASSETS_ONLY__ });
}
