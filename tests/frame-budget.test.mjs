import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ResolutionGovernor, boundedPixelRatio } from '../src/render/resolution.js';
import { PRESETS } from '../src/render/quality.js';
import { FrameTelemetry } from '../src/render/frame-telemetry.js';
import { GpuProfiler } from '../src/render/profiler.js';
import { MB } from '../src/world/geom.js';
import { deferredBuilder, createGeometryStreamer } from '../src/world/streaming.js';
import { packGeometry, unpackGeometry, geometryTransferables } from '../src/world/geometry-transfer.js';
import { compactGeometry } from '../src/render/geometry-budget.js';

test('severe 4-12 FPS cadence adapts within seconds instead of resetting / waiting 90 frames', () => {
  for(const fps of [3,4,8,12]){
    const g=new ResolutionGovernor(PRESETS.mobile);let changes=0;
    for(let i=0;i<Math.ceil(fps*7);i++)if(g.observe(1/fps))changes++;
    assert.ok(changes>0);assert.ok(g.scale<PRESETS.mobile.renderScale);assert.ok(g.scale>=PRESETS.mobile.minRenderScale);
  }
});
test('mobile starts with a 650k pixel cap; fast cadence raises slowly and suspension does not lower quality', () => {
  for(const [width,height]of [[1180,820],[820,1180],[3840,2160]]){
    const p=boundedPixelRatio({width,height,devicePixelRatio:2,scale:PRESETS.mobile.renderScale,quality:PRESETS.mobile});
    assert.ok(width*height*p*p<=650000.01);
  }
  const g=new ResolutionGovernor(PRESETS.mobile);g.observe(5);assert.equal(g.scale,.75);
  for(let i=0;i<120;i++)g.observe(1/10);const low=g.scale;
  for(let i=0;i<60;i++)g.observe(1/30);assert.equal(g.scale,low);
});
test('telemetry reports actual 10 FPS, CPU and submission separately; it never substitutes target 30', () => {
  let t=0;const f=new FrameTelemetry({now:()=>t});
  for(let i=0;i<40;i++){t+=100;f.cpu(12);f.submit(4);f.observe(.1)}
  const r=f.report();assert.equal(r.fps,10);assert.equal(r.cpuMs,12);assert.equal(r.submitMs,4);assert.equal(r.p95Ms,100);assert.ok(r.longFrames>0);
  f.observe(1,'menu');assert.equal(f.report().fps,10);t+=4000;assert.equal(f.report().fps,null);f.reset();assert.equal(f.report().samples,0);
});
test('GPU profiling is asynchronous and its query backlog is bounded', () => {
  let created=0;const ext={TIME_ELAPSED_EXT:1,GPU_DISJOINT_EXT:2},gl={createQuery:()=>({id:++created}),beginQuery(){},endQuery(){},deleteQuery(){},getExtension:()=>ext,
    getParameter:()=>false,getQueryParameter:()=>false,QUERY_RESULT_AVAILABLE:3,QUERY_RESULT:4};
  const p=new GpuProfiler({getContext:()=>gl},true);for(let i=0;i<200;i++){p.begin('scene');p.end();}
  assert.ok(p.pending.length<=24);assert.ok(created<=24);p.reset();assert.equal(p.pending.length,0);
});
test('transferred geometry preserves types, precision, index, bounds and groups without copying completed buffers', () => {
  const m=new MB();m.setPart(2).box(1.123456789,2,3,4,5,6);const g=compactGeometry(m.build({part:true}));
  const packet=packGeometry(g),buffers=geometryTransferables(packet),clone=structuredClone(packet,{transfer:buffers});
  assert.ok(buffers.every(b=>b.byteLength===0));const out=unpackGeometry(clone);
  for(const [name,a]of Object.entries(clone.attributes))assert.equal(out.attributes[name].array.buffer,a.array.buffer);
  assert.ok(out.attributes.color.isFloat16BufferAttribute);assert.equal(out.attributes.normal.normalized,true);
  assert.deepEqual(out.boundingBox,g.boundingBox);assert.deepEqual(out.boundingSphere,g.boundingSphere);assert.deepEqual(out.groups,g.groups);
});
function streamedFixture(){
 const scene=new THREE.Scene(),b=deferredBuilder(MB,{methods:['box'],role:'detail',cx:0,cz:0,range:240});b.box(0,0,0,1,2,3);
 const g=b.build({part:true});scene.add(new THREE.Mesh(g,new THREE.MeshBasicMaterial()));return {stream:createGeometryStreamer(scene),g};
}
test('cancelled worker results cannot resurrect an evicted distant tile; only one worker slot is used', async()=>{
 const {stream,g}=streamedFixture();let current,cancelled=0,completed=0;
 const worker={available:true,busy:false,stats:{completed:0},submit(){this.available=false;this.busy=true;const promise=new Promise(resolve=>{current=resolve});return{id:1,promise}},cancel(){cancelled++}};
 stream.setWorker(worker);stream.update(new THREE.Vector3(),100);assert.equal(g.userData.streaming.ready,false);
 stream.update(new THREE.Vector3(5000,0,5000),0);assert.equal(cancelled,1);
 const m=new MB();m.box(0,0,0,1,2,3);current(packGeometry(compactGeometry(m.build({part:true}))));worker.busy=false;worker.available=true;await Promise.resolve();
 assert.equal(stream.stats.residentBytes,0);assert.equal(g.userData.streaming.ready,false);
});
test('worker failure falls back to identical main-thread geometry without losing the playable tile', async()=>{
 const {stream,g}=streamedFixture();let reject;
 const worker={available:true,busy:false,stats:{state:'ready'},submit(){this.available=false;this.busy=true;return{id:1,promise:new Promise((_,r)=>{reject=r})}},cancel(){}};
 stream.setWorker(worker);stream.update(new THREE.Vector3(),100);reject(Error('synthetic failure'));worker.busy=false;await Promise.resolve();
 stream.update(new THREE.Vector3(),100);assert.equal(g.userData.streaming.ready,true);assert.equal(g.attributes.position.count,24);assert.ok(stream.stats.residentBytes>0);
});
test('function-bearing or unknown-builder recipes cannot be sent to a worker', () => {
 class Capture {setColor(){}setPart(){}setXf(){}input(){}build(){return null}}
 const b=deferredBuilder(Capture,{methods:['input'],role:'capture',cx:0,cz:0,range:1});b.input(()=>42);assert.equal(b.recipe.packet(),null);
 const mb=deferredBuilder(MB,{methods:['box'],role:'detail',cx:0,cz:0,range:1});mb.box(0,0,0,1,1,1);assert.equal(mb.recipe.packet().builder,'MB');
});
