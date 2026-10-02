// Full production/Data-URI integration test. Default mode mocks CDN responses with local dist/.
// CDN_LIVE=1 uses the real network WITHOUT interception, a local build, or a dev server.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const info = JSON.parse(await readFile('deployment/build-info.json', 'utf8'));
const uri = (await readFile('deployment/launcher.data-uri.txt', 'utf8')).trim();
const live = process.env.CDN_LIVE === '1';
const errors = [], failed = [], requests = [], responses = [];
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--enable-precise-memory-info'] });
const page = await browser.newPage({ viewport: { width: 1180, height: 820 }, deviceScaleFactor: 2, hasTouch: true,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1' });
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('requestfailed', r => failed.push([r.url(), r.failure()?.errorText]));
page.on('request', r => { if (r.url().startsWith('https://cdn.jsdelivr.net/')) requests.push(r.url()); });
page.on('response', r => {
  if (!r.url().startsWith('https://cdn.jsdelivr.net/')) return;
  const headers = r.headers();
  responses.push({ url: r.url(), status: r.status(), type: headers['content-type'], cors: headers['access-control-allow-origin'] });
  if (!r.url().startsWith(info.base)) errors.push('Unexpected CDN response ' + r.url());
  if (r.status() >= 400) errors.push('CDN HTTP ' + r.status() + ': ' + r.url());
});
if (!live) await page.route('https://cdn.jsdelivr.net/**', async route => {
  const url = route.request().url();
  if (!url.startsWith(info.base)) { errors.push('Unexpected CDN request ' + url); return route.abort(); }
  const name = decodeURIComponent(url.slice(info.base.length).split('?')[0]);
  const file = path.resolve('dist', name);
  if (!file.startsWith(path.resolve('dist') + path.sep)) return route.abort();
  try {
    const types = { '.html': 'text/plain', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json',
      '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.glb': 'model/gltf-binary', '.woff2': 'font/woff2',
      '.ogg': 'audio/ogg', '.m4a': 'audio/mp4' };
    await route.fulfill({ body: await readFile(file), headers: { 'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*', 'X-Content-Type-Options': 'nosniff' } });
  } catch { errors.push('Missing built asset ' + name); await route.fulfill({ status: 404, body: 'Missing asset' }); }
});
await page.addInitScript(() => { let ctx;
  Object.defineProperty(window, '__ctx', { get: () => ctx, set: value => { ctx = value; ctx.manualStep = true; } });
});
let stats;
try {
  await page.goto(uri, { waitUntil: 'commit' });
  await page.waitForFunction(() => window.__ctx?.stepFrame && __ctx.combat, null, { timeout: 150000 });
  const cdp = await page.context().newCDPSession(page); await cdp.send('HeapProfiler.collectGarbage');
  stats = await page.evaluate(() => ({ origin: location.origin, base: document.baseURI, quality: __ctx.quality.name,
    persistentSave: __ctx.sys.save.persistent, heapBytes: performance.memory?.usedJSHeapSize,
    stream: __ctx.world.streamer.stats, size: __ctx.pipeline.size }));
  assert.equal(stats.origin, 'null'); assert.equal(stats.base, info.base); assert.equal(stats.quality, 'mobile'); assert.equal(stats.persistentSave, false);
  assert.ok(stats.size.W * stats.size.H <= 1000000);
  assert.ok(stats.stream.residentBytes <= stats.stream.maxResidentBytes);
  console.log((live ? 'LIVE CDN' : 'MOCKED CDN') + ' Data URI loaded:', JSON.stringify(stats));
  // SwiftShader has no A14 GPU. Test the native backing-store budget above, but render captures at a smaller
  // backing store to keep CPU-software rasterization practical. CSS viewport, content, shaders and physics are real.
  const softwareScale = Number(process.env.SMOKE_SCALE || 0.35);
  await page.evaluate(scale => { __ctx.resolution.governor.scale = scale; __ctx.resolution.resize(); }, softwareScale);
  stats.softwareCaptureScale = softwareScale;
  await page.evaluate(() => { for (let i = 0; i < 4; i++) __ctx.stepFrame(1 / 30); });
  stats.render = await page.evaluate(() => __ctx.pipeline.stats);
  console.log('Frames submitted:', JSON.stringify(stats.render));
  await page.waitForFunction(() => !document.querySelector('#boot'), null, { timeout: 10000 });
  await mkdir('artifacts', { recursive: true });
  await page.screenshot({ path: 'artifacts/cdn-mobile-landscape.png', timeout: 120000 });
  console.log('Landscape captured');
  stats.render = await page.evaluate(() => __ctx.pipeline.stats);
  // Route real Chromium multi-touch PointerEvents, rather than only synthetic dispatchEvent() fixtures.
  const center = async selector => { const r = await page.locator(selector).boundingBox(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; };
  const stick = await center('.touch-stick'), swing = await center('[data-action=swing]');
  const touch = (id, p) => ({ id, x: p.x, y: p.y, radiusX: 8, radiusY: 8, force: 1 });
  await page.evaluate(() => { window.originalRender = __ctx.pipeline.render; __ctx.pipeline.render = () => {};
    __ctx.player.teleport(new __ctx.THREE.Vector3(250, 40, 168), 0); });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [touch(1, stick), touch(2, swing)] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [touch(1, { x: stick.x + 40, y: stick.y - 30 }), touch(2, swing)] });
  const controlled = await page.evaluate(() => { __ctx.stepFrame(1 / 30); return { move: __ctx.input.state.move, swing: __ctx.input.state.swing, mode: __ctx.player.mode, web: __ctx.player.web.active }; });
  console.log('Touch state:', JSON.stringify(controlled));
  assert.ok(controlled.move.x > .4); assert.ok(controlled.move.y > .3); assert.equal(controlled.swing, true);
  assert.equal(controlled.mode, 'swing'); assert.equal(controlled.web, true);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await page.evaluate(() => __ctx.stepFrame(1 / 30));
  assert.equal(await page.evaluate(() => __ctx.input.state.swing), false);
  assert.equal(await page.evaluate(() => !!document.pointerLockElement), false);
  stats.touch = controlled;
  await page.locator('[data-nav=map]').tap();
  assert.equal(await page.evaluate(() => __ctx.flow.mode), 'menu');
  assert.equal(await page.evaluate(() => __ctx.sys.pause.tab), 'map');
  await page.locator('.sys-menu .tab').filter({ hasText: 'Settings' }).tap();
  assert.equal(await page.locator('[data-k=quality] button').count(), 1);
  assert.equal(await page.locator('[data-k=quality] button').textContent(), 'Mobile');
  await page.getByRole('button', { name: 'Resume game' }).tap();
  assert.equal(await page.evaluate(() => __ctx.flow.mode), 'play');
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.sys-menu')).visibility === 'hidden');
  await page.setViewportSize({ width: 820, height: 1180 });
  await page.evaluate(() => { __ctx.pipeline.render = window.originalRender; __ctx.stepFrame(1 / 30); });
  stats.portraitSize = await page.evaluate(() => __ctx.pipeline.size);
  assert.ok(stats.portraitSize.W * stats.portraitSize.H <= 1000000);
  await page.screenshot({ path: 'artifacts/cdn-mobile-portrait.png', timeout: 90000 });
  assert.deepEqual(errors, []); assert.deepEqual(failed, []);
  assert.ok(responses.some(r => r.url === info.entry && r.status === 200));
  assert.ok(responses.some(r => /\.js$/.test(r.url) && r.status === 200));
  assert.ok(responses.some(r => /spiderman\.glb$/.test(r.url) && r.status === 200));
  console.log('PASS: opaque-origin assets, shaders, touch movement/swing input, map/resume, portrait budget');
} finally {
  await mkdir('artifacts', { recursive: true });
  const boot = await page.evaluate(() => ({ label: document.querySelector('#boot .lbl')?.textContent,
    message: document.querySelector('#boot .msg')?.textContent, fallback: window.__ctx ? undefined : document.body.innerText.slice(0, 2000) })).catch(() => null);
  await writeFile('artifacts/cdn-smoke.json', JSON.stringify({ mode: live ? 'live' : 'mocked', base: info.base, stats, boot, errors, failed, requests, responses }, null, 2));
  await browser.close();
}
