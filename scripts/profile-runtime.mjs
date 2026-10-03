// Repeatable mobile CPU / draw-work profile. SwiftShader is NOT an A14 FPS benchmark.
// PROFILE_URL='http://127.0.0.1:5173/?q=mobile&noruntimecache' supplies the reference path.
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const url = process.env.PROFILE_URL || 'http://127.0.0.1:5173/?q=mobile';
const output = process.env.PROFILE_OUTPUT || 'artifacts/runtime-profile.json';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--enable-precise-memory-info'] });
const page = await browser.newPage({ viewport: { width: 1180, height: 820 }, deviceScaleFactor: 2, hasTouch: true });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); if (/\[city\] built|\[warmup\]/.test(m.text())) console.log(m.text()); });
await page.addInitScript(() => {
  let ctx, seed = 4711;
  Math.random = () => ((seed = Math.imul(seed, 1664525) + 1013904223 | 0) >>> 0) / 4294967296;
  Object.defineProperty(window, '__ctx', { get: () => ctx, set: c => { ctx = c; ctx.manualStep = true; } });
});
try {
  await page.goto(url, { waitUntil: 'commit' });
  await page.waitForFunction(() => window.__ctx?.stepFrame && __ctx.combat, null, { timeout: 180000 });
  console.log('RUNTIME_LOADED');
  const result = await page.evaluate(async () => {
    const C = __ctx; C.resolution.governor.scale = .25; C.resolution.resize();
    C.stepFrame(1 / 30);
    const render = C.pipeline.render, present = C.pipeline.present, warmup = C.warmup;
    C.pipeline.render = C.pipeline.present = () => {}; C.warmup = null;
    const summarize = a => { const s = a.slice().sort((a,b) => a-b); return { samples:a.length,mean:a.reduce((s,x)=>s+x,0)/a.length,median:s[Math.floor(s.length*.5)],p95:s[Math.floor(s.length*.95)],max:s.at(-1) }; };
    // Let initial streams/AI populations and V8 tiers settle BEFORE timing. Exclude rendering and shader work;
    // the remaining step is real player/world/physics/AI/UI logic. Never interpret its reciprocal as game FPS.
    for (let i=0;i<180;i++) { C.stepFrame(1/30); await new Promise(r=>setTimeout(r,0)); }
    C.world.prof = {}; C.world.life.crowd.prof = {};
    const cpu=[];
    for (let i=0;i<180;i++) { const a=performance.now();C.stepFrame(1/30);cpu.push(performance.now()-a);await new Promise(r=>setTimeout(r,0)); }
    const gameplayCpu=summarize(cpu),worldParts={...C.world.prof},crowdParts={...C.world.life.crowd.prof},trafficParts={...C.world.life.traffic.ms};
    C.sys.pause.show('map'); const map=[];
    for(let i=0;i<90;i++){const a=performance.now();C.stepFrame(1/30);map.push(performance.now()-a);await new Promise(r=>setTimeout(r,0));}
    const mapCpu=summarize(map.slice(10)),layout=C.sys.pause.pages[0].stats,policy=C.framePolicy.stats;
    C.sys.pause.close();C.pipeline.render=render;C.pipeline.present=present;C.warmup=warmup;
    // Fixed state, same light/shadow update in each render. Compare exact on-screen pixels and draw work with
    // tight AABB culling toggled: catches clipped geometry AND omitted off-camera shadow casters.
    const draw = () => { for(const l of C.lighting.csm.lights)l.shadow.needsUpdate=true;C.pipeline.render(1/30);
      const size=C.pipeline.size,pixels=new Uint8Array(size.W*size.H*4);C.renderer.getContext().readPixels(0,0,size.W,size.H,C.renderer.getContext().RGBA,C.renderer.getContext().UNSIGNED_BYTE,pixels);
      return {stats:C.pipeline.stats,pixels}; };
    if(C.boxCulling)C.boxCulling.enabled=false;
    const before=draw();if(C.boxCulling)C.boxCulling.enabled=true;const after=draw();
    let different=0,maxDifference=0;for(let i=0;i<before.pixels.length;i++){const d=Math.abs(before.pixels[i]-after.pixels[i]);if(d)different++;maxDifference=Math.max(maxDifference,d);}
    C.sys.pause.show('map');C.stepFrame(1/30);C.stepFrame(1/30);const cachedDraw=C.pipeline.stats;C.sys.pause.close();
    return {gameplayCpu,worldParts,crowdParts,trafficParts,mapCpu,layout,policy,drawWork:{before:before.stats,after:after.stats,cachedMap:cachedDraw},
      pixelComparison:{components:before.pixels.length,different,maxDifference},boxCulling:C.boxCulling?.stats,stream:C.world.streamer.stats,
      life:C.world.life.stats(),heapBytes:performance.memory?.usedJSHeapSize,uniforms:C.renderer.getContext().__uCacheStats};
  });
  const cdp=await page.context().newCDPSession(page);await cdp.send('HeapProfiler.collectGarbage');
  const heapAfterGc=await page.evaluate(()=>performance.memory?.usedJSHeapSize);
  if(errors.length)throw Error(errors.join('\n'));
  await fs.mkdir('artifacts',{recursive:true});
  const proof={url,engine:browser.version(),gpu:'SwiftShader (software)',measuredAt:new Date().toISOString(),
    cpuOnly:true,viewport:{width:1180,height:820,dpr:2},softwareCaptureScale:.25,warmupFrames:180,
    ...result,heapAfterGc,errors,caveat:'Sandbox CPU measurements and draw/pixel comparison; not physical A14/Safari FPS or total device RAM.'};
  await fs.writeFile(output,JSON.stringify(proof,null,2)+'\n');console.log('RUNTIME_RESULT',JSON.stringify(proof));
} finally { await browser.close(); }
