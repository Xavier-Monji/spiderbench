import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const errors = [], cityStages = [];
const output = process.env.PROFILE_OUTPUT || 'artifacts/startup-memory.json';
const base = process.env.PROFILE_URL || 'http://127.0.0.1:5173/?q=mobile&memlog';
const heapLimit = Number(process.env.PROFILE_HEAP_MB || 0);

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--enable-precise-memory-info', ...(heapLimit ? [`--js-flags=--max-old-space-size=${heapLimit}`] : [])] });
const page = await browser.newPage({hasTouch:true,viewport:{width:1180,height:820},deviceScaleFactor:2});
const stages=[];
page.on('console', m=> {
  if (m.type() === 'error') errors.push(m.text());
  const match = m.text().match(/\[city:stage\] (.+) (\d+)$/);
  if (match) cityStages.push({ stage: match[1], heap: Number(match[2]) });
  if(m.type()==='error'||m.text().includes('city:')||m.text().includes('[warmup]')) console.log(m.type(),m.text());
});
page.on('pageerror', e => { errors.push(e.message); console.error('PAGEERROR', e.message); });
await page.exposeFunction('bootProfile', record=>{stages.push(record);console.log('STAGE',JSON.stringify(record));});
await page.addInitScript(()=>{
  let boot,ctx;
  Object.defineProperty(window,'__ctx',{get:()=>ctx,set:c=>{ctx=c;ctx.manualStep=true;}});
  Object.defineProperty(window,'__boot',{get:()=>boot,set:b=>{boot=b;let original=b.stage;b.stage=async function(name){window.bootProfile({stage:name,heap:performance.memory?.usedJSHeapSize,t:performance.now()});return original.apply(this,arguments);};}});
});
try {
await page.goto(base, { waitUntil: 'commit' });
await page.waitForFunction(()=>window.__ctx?.stepFrame&&__ctx.combat,null,{timeout:180000});
const cdp=await page.context().newCDPSession(page);await cdp.send('HeapProfiler.collectGarbage');
const runtimeHeap=await cdp.send('Runtime.getHeapUsage');
const report=await page.evaluate(()=>{
 const geometry=new Map(), textures=new Set(), buffers=new Set(); let uniqueGeometryBytes=0;
 const track=a=>{const arr=a?.array||a?.data?.array;if(arr&&!buffers.has(arr.buffer)){buffers.add(arr.buffer);uniqueGeometryBytes+=arr.buffer.byteLength;}};
 const tex=t=>{if(t?.isTexture)textures.add(t);};
 __ctx.scene.traverse(m=>{
  if(m.geometry&&!geometry.has(m.geometry)){
   for(const a of Object.values(m.geometry.attributes))track(a);track(m.geometry.index);
   const g=m.geometry;
   geometry.set(g,{name:m.name,bytes:Object.values(g.attributes).reduce((n,a)=>n+(a.array?.byteLength||a.data?.array?.byteLength||0),g.index?.array.byteLength||0),verts:g.attributes.position?.count,streamed:!!g.userData.streaming});
  }
  for(const mat of [m.material].flat().filter(Boolean)){
   for(const v of Object.values(mat))tex(v);
   for(const u of Object.values(mat.uniforms||{}))tex(u?.value);
  }
 });
 const grid=__ctx.world.collision;
 const geometryList=[...geometry.values()].sort((a,b)=>b.bytes-a.bytes);
 const textureList=[...textures].map(t=>({name:t.name,size:[t.image?.width,t.image?.height,t.image?.depth],cpu:t.image?.data?.byteLength||0})).sort((a,b)=>b.cpu-a.cpu);
 return {heap:performance.memory.usedJSHeapSize,uniqueGeometryBytes,geometryBytes:geometryList.reduce((n,g)=>n+g.bytes,0),geometryList,textures:textureList,
 collision:{n:grid.n,typedBytes:Object.values(grid).filter(ArrayBuffer.isView).reduce((n,a)=>n+a.byteLength,0),fields:grid.fields.length,fieldBytes:grid.fields.reduce((n,f)=>n+f.h.byteLength+(f.lo?.byteLength||0),0)},stream:__ctx.world.streamer?.stats};
});
if (errors.length) throw new Error(errors.join('\n'));
await fs.mkdir('artifacts', { recursive: true });
const evidence = { url: base, engine: browser.version(), gpu: 'SwiftShader (software)', manualStepping: true,
  viewport: { width: 1180, height: 820, dpr: 2, touch: true }, chromiumOldSpaceLimitMiB: heapLimit || null,
  measuredAt: new Date().toISOString(), observedPeakBytes: Math.max(...[...stages, ...cityStages].map(s => s.heap || 0)),
  stages, cityStages, runtimeHeap, ...report, errors,
  caveat: 'Sampled Chromium JS/backing-store accounting, not total browser RAM/GPU or an iPad/Safari hardware measurement. Final sample follows explicit CDP garbage collection.' };
await fs.writeFile(output, JSON.stringify(evidence, null, 2) + '\n');
console.log('SUMMARY',JSON.stringify({runtimeHeap,...report,geometryList:report.geometryList.slice(0,25),textures:report.textures.slice(0,15)}));
} finally {await browser.close();}
