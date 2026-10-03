import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createFramePolicy, stepGameFrame } from '../src/render/frame-policy.js';
import { installUniformCache } from '../src/render/uniform-cache.js';
import { SpatialCandidates } from '../src/world/spatial-candidates.js';
import { createLayoutCache, projectMapIcons } from '../src/ui/menus/map-layout.js';
import { createGeometryStreamer } from '../src/world/streaming.js';

function frameFixture(mobile = true) {
  const calls = [], stage = name => ({ update() { calls.push(name); } });
  const ctx = { quality: { mobile }, player: stage('player'), world: stage('world'), lighting: stage('lighting'), hud: stage('hud'),
    flow: { mode: 'play' }, sys: { pause: { open: false, tab: 'map' } }, systems: [stage('UI/audio')],
    pipeline: { render() { calls.push('scene'); }, present() { calls.push('present'); } }, warmup: { step() { calls.push('warmup'); } } };
  ctx.framePolicy = createFramePolicy(ctx); return { ctx, calls };
}
test('mobile opaque menus reuse a graded image while UI/audio still update; no stale Resume or gamepad frame', () => {
  const { ctx, calls } = frameFixture();
  stepGameFrame(ctx, 1 / 30); assert.deepEqual(calls, ['player', 'world', 'lighting', 'hud', 'UI/audio', 'scene', 'warmup']);
  ctx.flow.mode = 'menu'; ctx.sys.pause.open = true; calls.length = 0;
  stepGameFrame(ctx, 1 / 30); assert.ok(calls.includes('world'));
  calls.length = 0; stepGameFrame(ctx, 1 / 30); assert.deepEqual(calls, ['UI/audio', 'present']);
  ctx.systems.push({ update() { ctx.flow.mode = 'play'; ctx.sys.pause.open = false; } });
  calls.length = 0; stepGameFrame(ctx, 1 / 30);
  assert.deepEqual(calls, ['UI/audio', 'player', 'world', 'lighting', 'hud', 'scene', 'warmup']);
  assert.deepEqual(ctx.framePolicy.stats, { worldFrames: 3, cachedFrames: 1 });
});
test('resize/settings invalidation, Suits, Photo, travel, developer overlays and desktop keep rendering', () => {
  const { ctx, calls } = frameFixture(); ctx.flow.mode = 'menu'; ctx.sys.pause.open = true;
  stepGameFrame(ctx, 0); stepGameFrame(ctx, 0); ctx.framePolicy.invalidate(); calls.length = 0;
  stepGameFrame(ctx, 0); assert.ok(calls.includes('scene')); assert.ok(!calls.includes('present'));
  for (const [mode, tab, overlay] of [['menu','suits',false],['photo','map',false],['travel','map',false],['menu','map',true]]) {
    ctx.flow.mode = mode; ctx.flow.overlay = overlay; ctx.sys.pause.tab = tab;
    stepGameFrame(ctx, 0); calls.length = 0; stepGameFrame(ctx, 0); assert.ok(calls.includes('scene'));
  }
  const desktop = frameFixture(false); desktop.ctx.flow.mode = 'menu'; desktop.ctx.sys.pause.open = true;
  stepGameFrame(desktop.ctx, 0); desktop.calls.length = 0; stepGameFrame(desktop.ctx, 0); assert.ok(desktop.calls.includes('scene'));
});
test('exact shadow uniform cache covers the single mobile matrix, respects relinks/changed values/overloads', () => {
  const sent = [], locations = new Map();
  const gl = { getUniformLocation(p,n) { const k=p+':'+n; if (!locations.has(k)) locations.set(k, {k}); return locations.get(k); },
    uniformMatrix4fv(...args) { sent.push(args); }, uniformMatrix3fv(...args) { sent.push(args); } };
  const r={getContext:()=>gl}; installUniformCache(r); installUniformCache(r);
  const shadow=gl.getUniformLocation('one','directionalShadowMatrix[0]'), model=gl.getUniformLocation('one','modelViewMatrix');
  const m=new Float32Array(16).fill(1);
  gl.uniformMatrix4fv(shadow,false,m); gl.uniformMatrix4fv(shadow,false,m); assert.equal(sent.length,1);
  m[3]=Math.fround(.12345); gl.uniformMatrix4fv(shadow,false,m); assert.equal(sent.length,2);
  const relink=gl.getUniformLocation('two','directionalShadowMatrix[0]'); gl.uniformMatrix4fv(relink,false,m); assert.equal(sent.length,3);
  gl.uniformMatrix4fv(model,false,m); gl.uniformMatrix4fv(model,false,m); assert.equal(sent.length,5);
  gl.uniformMatrix4fv(shadow,false,m,0,16); gl.uniformMatrix4fv(shadow,true,m); assert.equal(sent.length,7);
  const array=gl.getUniformLocation('one','bigArray'); const a=new Float32Array(32);
  gl.uniformMatrix4fv(array,false,a); gl.uniformMatrix4fv(array,false,a); assert.equal(sent.length,8);
  assert.equal(gl.__uCacheStats.skipped,2);
});
test('spatial candidates are conservative, stable in source order and retain global moving walkers', () => {
  let seed=17; const rnd=()=>((seed=Math.imul(seed,1664525)+1013904223|0)>>>0)/4294967296;
  const items=Array.from({length:8000},(_,id)=>({id,x:(rnd()-.5)*8000,z:(rnd()-.5)*8000,mode:id%31===0?'path':'stand'}));
  const index=new SpatialCandidates(items,{always:a=>a.mode==='path'||a.mode==='prom'});
  for (let frame=0;frame<30;frame++) {
    const x=(rnd()-.5)*7000,z=(rnd()-.5)*7000,r=240;
    const selected=index.query(x,z,r);
    const expected=items.filter(a=>a.mode==='path'||a.mode==='prom'||(a.x-x)**2+(a.z-z)**2<=r*r);
    const exact=selected.filter(a=>a.mode==='path'||a.mode==='prom'||(a.x-x)**2+(a.z-z)**2<=r*r);
    assert.deepEqual(exact,expected);
    assert.ok(selected.length<items.length/4);
    for(const a of selected.slice(0,20)){a.x+=100;a.z-=50;index.update(a);}
  }
  assert.equal(index.query(Infinity,0,1),items);
});
test('spatial candidates follow moved reactions, mode changes, appended actors and explicit tool invalidation', () => {
  const a={x:0,z:0,mode:'stand'},b={x:1000,z:1000,mode:'stand'},c={x:-500,z:-500,mode:'path'},items=[a,b,c];
  const index=new SpatialCandidates(items,{always:a=>a.mode==='path'});
  assert.deepEqual(index.query(0,0,10),[a,c]);
  a.x=a.z=900;index.update(a);assert.deepEqual(index.query(0,0,10),[c]);
  b.mode='path';index.update(b);assert.deepEqual(index.query(0,0,10),[b,c]);
  const d={x:1,z:1,mode:'stand'};items.push(d);assert.deepEqual(index.query(0,0,10),[b,c,d]);
  a.x=a.z=0;index.invalidate();assert.deepEqual(index.query(0,0,10),[a,b,c,d]);
});
test('map calculations reuse layouts but invalidate on exact pan/zoom/state/route/panel changes', () => {
  const c=createLayoutCache();let builds=0;const fn=()=>({n:++builds});
  const first=c.get([1,2,'state'],fn);assert.equal(c.get([1,2,'state'],fn),first);
  assert.notEqual(c.get([1,2,'changed'],fn),first);c.clear();assert.equal(c.get([1,2,'changed'],fn).n,3);
  const uncached=createLayoutCache({enabled:false}); assert.notEqual(uncached.get([1],fn),uncached.get([1],fn));
});
test('cached icon placement is byte-identical to original relaxation, including coincident/off-screen icons', () => {
  const items=Array.from({length:50},(_,i)=>({id:i,x:i%7===0?0:Math.sin(i)*100,y:i%7===0?0:Math.cos(i)*100,small:i%3===0,area:i%11===0}));
  const reference=items.map(it=>({it,X:it.x,Y:it.y})).sort((a,b)=>a.Y-b.Y),big=reference.filter(p=>!p.it.small&&!p.it.area),size=32,minD=size*.95;
  for(let pass=0;pass<4;pass++)for(let i=0;i<big.length;i++)for(let j=i+1;j<big.length;j++){
    const a=big[i],b=big[j];let dx=b.X-a.X,dy=b.Y-a.Y;const d=Math.hypot(dx,dy);if(d>=minD)continue;if(d<.01){dx=1;dy=0;}const k=(minD-d)/2/Math.max(d,.01);a.X-=dx*k;a.Y-=dy*k;b.X+=dx*k;b.Y+=dy*k;
  }
  assert.deepEqual(projectMapIcons(items,it=>[it.x,it.y],size),reference);
});
test('streaming cache keeps nearest role-prioritized residents instead of cycling farther tiles', () => {
  const order=[],scene=new THREE.Scene();
  for(const [id,role,cx]of[['detail','detail',0],['roof','roof',0],['facade1','facade',0],['facade2','facade',0]]) {
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute([],3));
    g.userData.streaming={ready:false,recipe:{cx,cz:0,range:100,role,bytes:1,*expand(){order.push(id);const out=new THREE.BoxGeometry(1,1,1);return out;}}};
    scene.add(new THREE.Mesh(g,new THREE.MeshBasicMaterial()));
  }
  const stream=createGeometryStreamer(scene,{maxResidentBytes:1400});stream.update(new THREE.Vector3(),100);
  assert.deepEqual(order,['facade1','facade2']);assert.ok(stream.stats.residentBytes<=1400);
  stream.update(new THREE.Vector3(5000,0,5000),0);assert.equal(stream.stats.residentBytes,0);
});

test('tight static AABB culling rejects sphere false positives but keeps off-camera shadow casters and moved bounds', async () => {
  const { installBoxFrustumCulling, markBoxCullable } = await import('../src/render/box-culling.js');
  const gate=installBoxFrustumCulling();
  const scene=new THREE.Scene(),object=new THREE.Mesh(new THREE.BoxGeometry(100,1,1),new THREE.MeshStandardMaterial());
  object.name='sidewalks';object.position.set(0,20,-20);scene.add(object);scene.updateMatrixWorld(true);markBoxCullable(scene);
  const camera=new THREE.PerspectiveCamera(55,1,.1,100);camera.updateMatrixWorld();
  const view=new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  gate.enabled=false;assert.equal(view.intersectsObject(object),true);gate.enabled=true;assert.equal(view.intersectsObject(object),false);
  const shadowCam=new THREE.OrthographicCamera(-60,60,30,-30,.1,100);shadowCam.updateMatrixWorld();
  const shadow=new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(shadowCam.projectionMatrix,shadowCam.matrixWorldInverse));
  assert.equal(shadow.intersectsObject(object),true);assert.equal(object.visible,true);
  object.position.y=0;object.updateMatrixWorld();assert.equal(view.intersectsObject(object),true);
  object.geometry.boundingBox.min.y=100;object.geometry.boundingBox.max.y=101;assert.equal(view.intersectsObject(object),false);
  // Unknown or shader-expanded meshes retain the original sphere path (bridge cables expand with distance).
  const cable=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial());cable.name='bridgeCables';scene.add(cable);
  markBoxCullable(scene);assert.equal(cable.userData.boxFrustum,undefined);
});

test('30 Hz deadlines stay phase-locked after late RAFs and drop missed slots without catch-up bursts',async()=>{
 const {nextFrameDeadline}=await import('../src/render/frame-clock.js');
 const interval=1000/30;let next=nextFrameDeadline(0,0,interval);assert.equal(next,interval);
 next=nextFrameDeadline(next,50,interval);assert.ok(Math.abs(next-2*interval)<1e-9); // not 83.33 ms
 next=nextFrameDeadline(next,200,interval);assert.ok(next>200);assert.ok(next-200<=interval+1);
 assert.equal(nextFrameDeadline(0,100,0),0);
});

test('sliced geometry compaction preserves every legacy packed byte and shared attribute identity',async()=>{
 const {compactGeometry,compactGeometrySteps}=await import('../src/render/geometry-budget.js');
 const g=new THREE.BufferGeometry(),n=70000;
 for(const [key,size]of [['position',3],['normal',3],['color',3],['aTint',3],['aM',4],['aPart',1],['uv',2]]){
  const a=Float32Array.from({length:n*size},(_,i)=>key==='aPart'?i%256:Math.sin(i)*1.25);
  g.setAttribute(key,new THREE.BufferAttribute(a,size));
 }
 const original=g.clone(),streamed=g.clone(),legacy=g.clone();
 // Explicit pre-optimization formula; do not just compare two callers of the new generator.
 for(const key of ['normal','color','aTint','aM','aPart']){
  const a=legacy.attributes[key];const out=key==='normal'?new THREE.BufferAttribute(Int16Array.from(a.array,v=>Math.round(Math.max(-1,Math.min(1,v))*32767)),a.itemSize,true)
   :key==='aPart'?new THREE.BufferAttribute(Uint8Array.from(a.array),1):new THREE.Float16BufferAttribute(Uint16Array.from(a.array,THREE.DataUtils.toHalfFloat),a.itemSize);
  legacy.setAttribute(key,out);
 }
 const steps=compactGeometrySteps(streamed);let s,yields=0;do{s=steps.next();if(!s.done)yields++;}while(!s.done);
 assert.ok(yields>50);assert.equal(s.value,streamed);compactGeometry(original);
 for(const key of Object.keys(legacy.attributes)){assert.deepEqual(streamed.attributes[key].array,legacy.attributes[key].array,key);assert.deepEqual(original.attributes[key].array,legacy.attributes[key].array,key);}
 const shared=new THREE.BufferGeometry();shared.setAttribute('normal',g.attributes.normal);const cache=new WeakMap();compactGeometry(g,cache);compactGeometry(shared,cache);
 assert.equal(g.attributes.normal,shared.attributes.normal);
});
