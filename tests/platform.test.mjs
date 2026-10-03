import { test } from 'node:test';
import assert from 'node:assert/strict';
import { detectDevice, shouldShowTouch } from '../src/platform/device.js';
import { selectQuality, PRESETS } from '../src/render/quality.js';
import { resolveAssetUrl, runtimeAssetBase } from '../src/platform/assets.js';
import { validateCdnBase } from '../scripts/cdn-base.mjs';
import { boundedPixelRatio, ResolutionGovernor } from '../src/render/resolution.js';
import { makeLauncher } from '../scripts/build-cdn.mjs';

const desktop = detectDevice({ userAgent: 'Mozilla Windows Chrome', platform: 'Win32', deviceMemory: 16 });
const ipad = detectDevice({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit Safari', platform: 'MacIntel', maxTouchPoints: 5 });
test('iPadOS desktop UA selects mobile, without relying on unavailable navigator.deviceMemory', () => {
  assert.equal(ipad.ipad, true); assert.equal(ipad.constrained, true); assert.equal(selectQuality({ device: ipad }).name, 'mobile');
  assert.equal(selectQuality({ device: desktop }).name, 'high');
  assert.equal(selectQuality({ device: detectDevice({ deviceMemory: 4 }) }).name, 'mobile');
});
test('explicit quality and touch opt-ins/opt-outs, medium alias, invalid names', () => {
  assert.equal(selectQuality({ search: '?q=high', device: ipad }).name, 'high');
  assert.equal(selectQuality({ search: '?q=medium', device: desktop }).name, 'med');
  assert.equal(selectQuality({ search: '?q=__proto__', device: ipad }).name, 'mobile');
  assert.equal(selectQuality({ launchQuality: 'mobile', device: desktop }).name, 'mobile');
  assert.equal(shouldShowTouch('?touch=0', ipad), false); assert.equal(shouldShowTouch('?touch=1', desktop), true);
});
test('mobile profile cannot accidentally allocate disabled passes through qset; presets are not mutated', () => {
  const q = selectQuality({ search: '?q=mobile&qset=taa:true,ssr:true,shadowMapSize:4096', device: desktop });
  for (const key of ['taa', 'ssr', 'ssgi', 'ao', 'shafts', 'planarReflections']) assert.equal(q[key], false);
  assert.equal(q.shadowMapSize, 1024); q.splits[1] = 999; assert.equal(PRESETS.mobile.splits[1], 140);
});
test('asset resolver handles CDN, subpaths, manifests, variants, blobs and custom URLs', () => {
  const base = 'https://cdn.jsdelivr.net/gh/owner/repo@v1/dist/';
  assert.equal(resolveAssetUrl('/assets/spiderman.glb', { base, mobile: true }), base + 'assets/mobile/spiderman.glb');
  assert.equal(resolveAssetUrl(base + 'assets/city/tex/walls_col.jpg', { base, mobile: true }), base + 'assets/mobile/city/tex/walls_col.jpg');
  assert.equal(resolveAssetUrl('/assets/audio/music_day.ogg', { base, mobile: true }), base + 'assets/audio/music_day.ogg');
  assert.equal(resolveAssetUrl('/assets/spiderman.glb', { base, mobile: true, mobileOnly: true }), base + 'assets/spiderman.glb');
  assert.equal(resolveAssetUrl('/assets/city/npc/people.bin', { base: '/game/' }), '/game/assets/city/npc/people.bin');
  for (const url of ['blob:example', 'data:image/png;base64,AA', 'https://other.example/custom.glb']) assert.equal(resolveAssetUrl(url, { base, mobile: true }), url);
  const once = resolveAssetUrl('/assets/spiderman.glb', { base, mobile: true });
  assert.equal(resolveAssetUrl(once, { base, mobile: true }), once);
});
test('Retina / portrait / large displays respect a hard million-pixel backing store cap', () => {
  for (const [width, height] of [[1180, 820], [820, 1180], [3840, 2160]]) {
    const ratio = boundedPixelRatio({ width, height, devicePixelRatio: 3, scale: 1, quality: PRESETS.mobile });
    assert.ok(width * height * ratio * ratio <= 1000000.01); assert.ok(ratio <= 1.25);
  }
  assert.equal(boundedPixelRatio({ width: 800, height: 600, devicePixelRatio: 2, quality: PRESETS.high }), 1.5);
});
test('adaptive resolution has a floor, a user ceiling, hysteresis and ignores suspended frames', () => {
  const g = new ResolutionGovernor(PRESETS.mobile);
  for (let i = 0; i < 1200; i++) g.observe(1 / 20);
  assert.equal(g.scale, PRESETS.mobile.minRenderScale);
  for (let i = 0; i < 4500; i++) g.observe(1 / 30);
  assert.equal(g.scale, PRESETS.mobile.renderScale);
  g.observe(5); assert.equal(g.scale, PRESETS.mobile.renderScale);
  g.setCeiling(4); assert.equal(g.ceiling, 1);
});
test('launcher is one tiny document that fetches HTML instead of trying to navigate to text/plain CDN HTML', () => {
  const base = 'https://cdn.jsdelivr.net/gh/owner/repo@v1/dist/';
  const html = makeLauncher(base), uri = 'data:text/html;charset=utf-8;base64,' + Buffer.from(html).toString('base64');
  assert.ok(html.includes(`let b="${base}";fetch(b+'index.html')`));
  assert.ok(html.includes("t.replace('<head>','<head><base href=\"'+b+'\">')"));
  assert.ok(html.includes("window.__spiderbenchQuality='mobile'")); assert.ok(!html.includes('<iframe'));
  assert.equal(Buffer.from(uri.split(',')[1], 'base64').toString(), html); assert.ok(!uri.includes('\n'));
});

test('portable builds resolve runtime URLs against the CDN module, not the opaque document', () => {
  const base = 'https://cdn.jsdelivr.net/gh/owner/repo@0123456789012345678901234567890123456789/dist/';
  assert.equal(runtimeAssetBase('./', base + 'assets/index-abc.js'), base);
  assert.equal(runtimeAssetBase('/', base + 'assets/index-abc.js'), '/');
  assert.equal(runtimeAssetBase('/game/', base + 'assets/index-abc.js'), '/game/');
  assert.equal(resolveAssetUrl('/assets/audio/sfx_ui.m4a', { base: runtimeAssetBase('./', base + 'assets/index-abc.js') }), base + 'assets/audio/sfx_ui.m4a');
});
test('launcher base validation excludes script injection, credentials, queries and non-CDN origins', () => {
  for (const base of ['http://cdn.jsdelivr.net/gh/a/b@c/dist/', 'https://evil.example/gh/a/b@c/dist/',
    'https://user:password@cdn.jsdelivr.net/gh/a/b@c/dist/', 'https://cdn.jsdelivr.net/gh/a/b@c/dist/?a=1',
    'https://cdn.jsdelivr.net/gh/a/b@c/dist/#x', 'https://cdn.jsdelivr.net/gh/a/b@c/dist']) {
    assert.throws(() => validateCdnBase(base));
  }
});
