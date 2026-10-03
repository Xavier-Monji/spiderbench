// Main-thread profile while actual touch traversal moves through the city. Optional CPU throttle is a
// controlled test stressor, NOT an Apple A14 emulator; GL rendering is excluded from these CPU samples.
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--enable-precise-memory-info'] });
const page=await browser.newPage({viewport:{width:1180,height:820},deviceScaleFactor:2,hasTouch:true});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
page.on('console',m=>{if(m.type()==='error')errors.push(m.text());if(/\[city\] built|\[warmup\]/.test(m.text()))console.log(m.text())});
await page.addInitScript(()=>{let ctx;Object.defineProperty(window,'__ctx',{get:()=>ctx,set:c=>{ctx=c;ctx.manualStep=true}})});
try{
 await page.goto(process.env.PROFILE_URL||'http://127.0.0.1:5173/?q=mobile',{waitUntil:'commit'});
 await page.waitForFunction(()=>window.__ctx?.stepFrame&&__ctx.combat,null,{timeout:180000});
 console.log('SWING_PROFILE_LOADED');
 const cdp=await page.context().newCDPSession(page),throttle=Number(process.env.PROFILE_CPU_THROTTLE||1);
 if(throttle>1)await cdp.send('Emulation.setCPUThrottlingRate',{rate:throttle});
 const result=await page.evaluate(async()=>{
  const C=__ctx;C.pipeline.render=C.pipeline.present=()=>{};C.warmup=null;
  const summaries={};const percentile=(v,p)=>{const a=v.slice().sort((a,b)=>a-b);return a[Math.min(a.length-1,Math.floor(a.length*p))]};
  const summary=v=>({samples:v.length,mean:v.reduce((a,b)=>a+b,0)/v.length,p50:percentile(v,.5),p95:percentile(v,.95),max:Math.max(...v)});
  const parts={player:[],world:[],lighting:[],hud:[]};
  for(const name of Object.keys(parts)){const obj=C[name],fn=obj.update;obj.update=function(...a){const t=performance.now();const v=fn.apply(this,a);parts[name].push(performance.now()-t);return v}}
  C.world.prof={};C.world.life.crowd.prof={};
  const stationary=[];
  for(let i=0;i<240;i++){const t=performance.now();C.stepFrame(1/30);stationary.push(performance.now()-t);await new Promise(r=>setTimeout(r,4));}
  const stillStream=C.world.streamer.stats,stillParts=Object.fromEntries(Object.entries(parts).map(([k,v])=>[k,summary(v.slice(120))]));
  for(const v of Object.values(parts))v.length=0;
  C.player.teleport(new C.THREE.Vector3(250,40,168),0);C.input.touch.press('MouseRight');C.input.touch.setMove(0,1);
  const moving=[],route=[];
  for(let i=0;i<450;i++){
   const t=performance.now();C.stepFrame(1/30);moving.push(performance.now()-t);
   if(i%30===0)route.push({frame:i,pos:C.player.position.toArray(),mode:C.player.mode,stream:C.world.streamer.stats});
   await new Promise(r=>setTimeout(r,4));
  }
  C.input.touch.release('MouseRight');C.input.touch.setMove(0,0);
  return {stationary:summary(stationary.slice(120)),stationaryParts:stillParts,stationaryStream:stillStream,
   moving:summary(moving),parts:Object.fromEntries(Object.entries(parts).map(([k,v])=>[k,summary(v)])),
   worldParts:C.world.prof,crowdParts:C.world.life.crowd.prof,trafficParts:C.world.life.traffic.ms,
   stream:C.world.streamer.stats,life:C.world.life.stats(),route,heap:performance.memory?.usedJSHeapSize};
 });
 await fs.mkdir('artifacts',{recursive:true});const proof={engine:browser.version(),measuredAt:new Date().toISOString(),cpuOnly:true,
  cpuThrottle:throttle,caveat:'Sandbox Chromium CPU-only traversal samples, not iPad/Safari FPS or GPU cost.',...result,errors};
 await fs.writeFile(process.env.PROFILE_OUTPUT||'artifacts/swing-profile.json',JSON.stringify(proof,null,2)+'\n');
 console.log('SWING_PROFILE_RESULT',JSON.stringify(proof));if(errors.length)throw Error(errors.join('\n'));
}finally{await browser.close()}
