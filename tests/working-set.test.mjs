import {test} from 'node:test';import assert from 'node:assert/strict';import * as THREE from 'three';
import {planAdmission,rankedResidents} from '../src/world/cache-admission.js';
import {createGeometryStreamer} from '../src/world/streaming.js';
import {crowdInterval,cadenceStep,poseAlpha,lerpAngle} from '../src/world/npc/cadence.js';

test('cache admission never replaces closer valuable residents with a farther completed tile',()=>{
 const resident=[{rank:10,bytes:30,s:{ready:true},order:0},{rank:25,bytes:30,s:{ready:true},order:1}];
 assert.equal(planAdmission({rank:100},rankedResidents(resident),60,64,20),null);
 assert.deepEqual(planAdmission({rank:0},rankedResidents(resident),60,64,20),[resident[1]]);
 assert.equal(planAdmission({rank:10},rankedResidents(resident),60,64,80),null);
});
test('saturated stationary streamer stops rebuilding the same 16 nearby tiles',()=>{
 const scene=new THREE.Scene(),loads=[];
 for(let i=0;i<16;i++){
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute([],3));
  g.boundingSphere=new THREE.Sphere(new THREE.Vector3(i*20,0,0),20);
  g.userData.streaming={ready:false,recipe:{cx:i*20,cz:0,range:500,role:'facade',bytes:10,*expand(){loads.push(i);return new THREE.BoxGeometry(1,1,1)}}};
  scene.add(new THREE.Mesh(g,new THREE.MeshBasicMaterial()));
 }
 const stream=createGeometryStreamer(scene,{maxResidentBytes:1500});const p=new THREE.Vector3();
 stream.update(p,100);const before=loads.length;
 for(let i=0;i<1000;i++)stream.update(p,10);
 assert.equal(loads.length,before);assert.equal(stream.stats.cache.repeatBuilds,0);assert.ok(stream.stats.residentBytes<=1500);
});
test('CPU cadence keeps player proximity/reacting actors immediate and staggers distant work',()=>{
 assert.equal(crowdInterval(40000,10,true),0);assert.equal(crowdInterval(40000,10,false),0);
 assert.equal(crowdInterval(900,10000,false),.1);assert.equal(crowdInterval(10000,10000,false),.2);
 const actors=Array.from({length:16},(_,slot)=>({slot}));const steps=[];
 for(let frame=0;frame<12;frame++)steps.push(actors.filter(a=>cadenceStep(a,1/30,.2)>0).length);
 assert.ok(steps.slice(0,5).some(n=>n>0));assert.ok(Math.max(...steps)<actors.length);
 const a={_simDebt:.15};assert.ok(cadenceStep(a,.033,0)>.18);assert.equal(a._simDebt,0);
});
test('render interpolation does not mutate authoritative physics and wraps yaw along the shortest arc',()=>{
 assert.equal(poseAlpha(2,1,.2),1);assert.equal(poseAlpha(1,1,.2),0);assert.ok(Math.abs(poseAlpha(1.1,1,.2)-.5)<1e-8);
 const midpoint=lerpAngle(Math.PI-.1,-Math.PI+.1,.5);assert.ok(Math.abs(midpoint-Math.PI)<1e-8);
});

test('static transform cache skips identity recomposition but still honors later position/rotation/scale edits',async()=>{
 const {cacheStaticTransform}=await import('../src/render/static-transforms.js');
 const object=new THREE.Object3D();let composed=0;const original=object.updateMatrix;
 object.updateMatrix=function(){composed++;original.call(this)};cacheStaticTransform(object);
 object.updateMatrixWorld();object.updateMatrixWorld();assert.equal(composed,1);
 object.position.set(3,4,5);object.updateMatrixWorld();assert.equal(composed,2);assert.equal(object.matrixWorld.elements[12],3);
 object.rotation.y=.4;object.scale.set(2,3,4);object.updateMatrixWorld();assert.equal(composed,3);
 const expected=new THREE.Matrix4().compose(object.position,object.quaternion,object.scale);assert.deepEqual(object.matrix,expected);
});
