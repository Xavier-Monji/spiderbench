// Full production/Data-URI integration test. Default mode mocks CDN responses with local dist/.
// CDN_LIVE=1 uses the real network WITHOUT interception, a local build, or a dev server.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { isStreamBufferAbort } from './cdn-media.mjs';
const info = JSON.parse(await readFile('deployment/build-info.json', 'utf8'));
const uri = (await readFile('deployment/launcher.data-uri.txt', 'utf8')).trim();
const live = process.env.CDN_LIVE === '1';
const errors = [], failed = [], abortedMedia = [], requests = [], responses = [];
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--enable-precise-memory-info'] });
const page = await browser.newPage({ viewport: { width: 1180, height: 820 }, deviceScaleFactor: 2, hasTouch: true,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1' });
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('requestfailed', r => {
  const failure = { url: r.url(), error: r.failure()?.errorText, resourceType: r.resourceType() };
  (isStreamBufferAbort(failure, info.base) ? abortedMedia : failed).push(failure);
});
page.on('request', r => { if (r.url().startsWith('https://cdn.jsdelivr.net/')) requests.push(r.url()); });
page.on('response', r => {
  if (!r.url().startsWith('https://cdn.jsdelivr.net/')) return;
  const headers = r.headers();
  responses.push({ url: r.url(), status: r.status(), type: headers['content-type'], cors: headers['access-control-allow-origin'] });
  if (!r.url().startsWith(info.base)) errors.push('Unexpected CDN response ' + r.url());
  if (r.status() >= 400) errors.push('CDN HTTP ' + r.status() + ': ' + r.url());
});
if (!live) await page.context().route('https://cdn.jsdelivr.net/**', async route => {
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
  window.__smokeMedia = new Set();
  const play = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function (...args) { window.__smokeMedia.add(this); return play.apply(this, args); };
  Object.defineProperty(window, '__ctx', { get: () => ctx, set: value => { ctx = value; ctx.manualStep = true; } });
});
// Check the game viewport, not just a visible HUD: a cleared/black WebGL canvas must fail the smoke test.
async function captureGame(file, timeout) {
  const image = await page.screenshot({ path: file, timeout });
  const { width, height } = await sharp(image).metadata();
  const { data, info } = await sharp(image).extract({ left: Math.floor(width * .38), top: Math.floor(height * .32),
    width: Math.floor(width * .24), height: Math.floor(height * .23) }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  let lit = 0;
  for (let i = 0; i < data.length; i += info.channels) if (Math.max(data[i], data[i + 1], data[i + 2]) > 15) lit++;
  const fraction = lit / (info.width * info.height);
  assert.ok(fraction > .25, `Game canvas appears black (${fraction.toFixed(3)} lit fraction)`);
  return fraction;
}
let stats;
try {
  await page.goto(uri, { waitUntil: 'commit' });
  await page.waitForFunction(() => window.__ctx?.stepFrame && __ctx.combat, null, { timeout: 180000 });
  const cdp = await page.context().newCDPSession(page); await cdp.send('HeapProfiler.collectGarbage');
  stats = await page.evaluate(() => ({ origin: location.origin, base: document.baseURI, quality: __ctx.quality.name,
    persistentSave: __ctx.sys.save.persistent, heapBytes: performance.memory?.usedJSHeapSize,
    stream: __ctx.world.streamer.stats, size: __ctx.pipeline.size }));
  assert.equal(stats.origin, 'null'); assert.equal(stats.base, info.base); assert.equal(stats.quality, 'mobile'); assert.equal(stats.persistentSave, false);
  assert.ok(stats.size.W * stats.size.H <= 650000);
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
  stats.landscapeLitFraction = await captureGame('artifacts/cdn-mobile-landscape.png', 120000);
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
  // The startup fix relies on actual eviction and replay, not just a lower initial counter. Keep physics/render
  // paused during this synthetic trip; then return to the real spawn, where CPU data is restored from compressed
  // chunks and GPU readiness remains progressive. Collision, map and input must still work after construction GC.
  stats.eviction = await page.evaluate(async () => {
    const stream = __ctx.world.streamer, before = stream.stats;
    const bytes = before.recipeBytes;
    stream.update(new __ctx.THREE.Vector3(10000, 0, 10000), 0);
    const far = stream.stats;
    await stream.prime(__ctx.world.spawn);
    const returned = stream.stats;
    return { before, far, returned, sameRecipes: returned.recipeBytes === bytes,
      ground: __ctx.world.groundHeight(__ctx.world.spawn.x, __ctx.world.spawn.z),
      map: !!__ctx.world.getMapFeatures() };
  });
  assert.equal(stats.eviction.far.residentBytes, 0); assert.equal(stats.eviction.far.ready, 0);
  assert.ok(stats.eviction.returned.residentBytes > 0);
  assert.ok(stats.eviction.returned.residentBytes <= stats.eviction.returned.maxResidentBytes);
  // Finish actual chunked VBO uploads before the next real scene render. CPU-only manual frames still
  // submit bounded COPY_WRITE slices; this catches broken native index/half/normalized attributes.
  stats.uploads = await page.evaluate(async () => {
    for (let i = 0; i < 240 && __ctx.diagnostics.report().uploads.completed < 2; i++) {
      __ctx.stepFrame(1/30); await new Promise(r => setTimeout(r, 0));
    }
    return __ctx.diagnostics.report().uploads;
  });
  assert.ok(stats.uploads.completed >= 2, 'Streamed VBO uploads never completed');
  assert.ok(stats.uploads.maxFrameBytes <= 256*1024, 'Stream upload frame byte budget exceeded');
  stats.worker = await page.evaluate(() => __ctx.geometryWorker?.stats);
  assert.ok(stats.worker && stats.worker.completed > 0 && stats.worker.failed === 0, 'Opaque-origin geometry worker did not build a tile');
  stats.poseAtlas = await page.evaluate(() => __ctx.crowdPoses?.stats);
  assert.ok(stats.poseAtlas && stats.poseAtlas.bakedFrames > 0 && !stats.poseAtlas.disabled, 'GPU crowd pose cache was not active');
  assert.ok(stats.eviction.sameRecipes); assert.ok(Number.isFinite(stats.eviction.ground)); assert.ok(stats.eviction.map);
  // Same fixed scene/light state: conservative AABB culling may reduce draws, never change final pixels.
  stats.culling = await page.evaluate(() => {
    const C = __ctx, gl = C.renderer.getContext(), { W, H } = C.pipeline.size;
    const draw = () => {
      for (const l of C.lighting.csm.lights) l.shadow.needsUpdate = true;
      window.originalRender();
      const image = new Uint8Array(W * H * 4); gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, image);
      return { image, stats: C.pipeline.stats };
    };
    C.boxCulling.enabled = false; const before = draw();
    C.boxCulling.enabled = true; const after = draw();
    let different = 0; for (let i = 0; i < before.image.length; i++) if (before.image[i] !== after.image[i]) different++;
    return { before: before.stats, after: after.stats, different, components: before.image.length };
  });
  assert.equal(stats.culling.different, 0, 'Static culling changed rendered pixels or shadows');
  assert.ok(stats.culling.after.calls <= stats.culling.before.calls);
  assert.ok(stats.culling.after.triangles <= stats.culling.before.triangles);
  await page.locator('[data-nav=map]').tap();
  assert.equal(await page.evaluate(() => __ctx.flow.mode), 'menu');
  assert.equal(await page.evaluate(() => __ctx.sys.pause.tab), 'map');
  stats.backgroundCache = await page.evaluate(() => {
    __ctx.pipeline.render = window.originalRender;
    for (let i = 0; i < 5; i++) __ctx.stepFrame(1 / 30);
    return { draw: __ctx.pipeline.stats, policy: __ctx.framePolicy.stats, map: __ctx.sys.pause.pages[0].stats };
  });
  assert.equal(stats.backgroundCache.draw.calls, 1); assert.equal(stats.backgroundCache.draw.cached, true);
  assert.ok(stats.backgroundCache.policy.cachedFrames >= 4); assert.ok(stats.backgroundCache.map.icons.hits >= 4);
  await page.locator('.sys-menu .tab').filter({ hasText: 'Settings' }).tap();
  assert.equal(await page.locator('[data-k=quality] button').count(), 1);
  assert.equal(await page.locator('[data-k=quality] button').textContent(), 'Mobile');
  await page.getByRole('button', { name: 'Resume game' }).tap();
  assert.equal(await page.evaluate(() => __ctx.flow.mode), 'play');
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.sys-menu')).visibility === 'hidden');
  await page.setViewportSize({ width: 820, height: 1180 });
  await page.evaluate(async () => {
    __ctx.pipeline.render = window.originalRender;
    // Playwright's viewport change queues both window and visualViewport resize events. Drawing in the same
    // task can precede a late resize which clears the canvas (the normal animation loop would draw again).
    for (let i = 0; i < 3; i++) { await new Promise(resolve => requestAnimationFrame(resolve)); __ctx.stepFrame(1 / 30); }
  });
  stats.portraitSize = await page.evaluate(() => __ctx.pipeline.size);
  assert.ok(stats.portraitSize.W * stats.portraitSize.H <= 650000);
  stats.portraitLitFraction = await captureGame('artifacts/cdn-mobile-portrait.png', 90000);
  // Validate the actual streamed elements, not just the request lifecycle: normal buffering/seek cancellations
  // are not broken audio. HTTP/CORS/decoder/network failures still fail this test.
  await page.waitForFunction(() => __ctx.sys.audio.state().stems.length === 4
    && [...window.__smokeMedia].filter(a => a.src.includes('/assets/audio/music_')).length === 4
    && [...window.__smokeMedia].every(a => !a.error && a.readyState >= 2 && !a.paused), null, { timeout: 30000 });
  stats.audio = await page.evaluate(() => ({ ...__ctx.sys.audio.state(), media: [...window.__smokeMedia].map(a =>
    ({ src: a.currentSrc, readyState: a.readyState, paused: a.paused, time: a.currentTime, error: a.error?.message || null })) }));
  assert.equal(stats.audio.loadErr, null); assert.equal(stats.audio.ctx, 'running');
  assert.ok(stats.audio.media.every(a => a.time > 0));
  assert.deepEqual(errors, []); assert.deepEqual(failed, []);
  assert.ok(responses.some(r => r.url === info.entry && r.status === 200));
  assert.ok(responses.some(r => /\.js$/.test(r.url) && r.status === 200));
  assert.ok(responses.some(r => /spiderman\.glb$/.test(r.url) && r.status === 200));
  console.log('PASS: opaque-origin assets, shaders, touch movement/swing input, eviction/return, collision/map/resume, portrait budget, pixel-exact static culling and single-draw MAP background');
} finally {
  await mkdir('artifacts', { recursive: true });
  const boot = await page.evaluate(() => ({ label: document.querySelector('#boot .lbl')?.textContent,
    message: document.querySelector('#boot .msg')?.textContent, fallback: window.__ctx ? undefined : document.body.innerText.slice(0, 2000) })).catch(() => null);
  await writeFile('artifacts/cdn-smoke.json', JSON.stringify({ mode: live ? 'live' : 'mocked', base: info.base, stats, boot, errors, failed, abortedMedia, requests, responses }, null, 2));
  await browser.close();
}
