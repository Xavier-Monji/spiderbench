// Integration entry. OWNER: orchestrator. Module contracts:
//  render/pipeline.js  createPipeline({renderer, scene, camera}) -> {render(dt), setSize(w,h), setFocus?(dist)}
//  render/lighting.js  createLighting({renderer, scene}) -> {sun, update(camera), timeOfDay}
//  world/city.js       buildCity({scene, renderer}) -> Promise<world>
//                      world = {raycast(origin:Vector3, dir:Vector3, max):{point,normal,distance}|null,
//                               groundHeight(x,z):number, spawn:Vector3, update(dt, camera)}
//  player/player.js    createPlayer({scene, world, camera, input, renderer}) -> Promise<player>
//                      player = {update(dt), object:Object3D, applyShot(name)->boolean}
//  ui/hud.js           createHud({player, world}) -> {update(dt), setVisible(b)}
//  shots.js            SHOTS[name] = {time?, apply(ctx)}  deterministic poses for screenshot/critique
import * as THREE from 'three';
import { createPipeline } from './render/pipeline.js';
import { createLighting } from './render/lighting.js';
import { buildCity } from './world/city.js';
import { createPlayer } from './player/player.js';
import { createInput } from './player/input.js';
import { createHud } from './ui/hud.js';
import { SHOTS } from './shots.js';
import { createWarmup } from './render/warmup.js'; // (perf r3)
import { REFL_LAYER } from './world/water.js';
import { BIG_CASTER_LAYER } from './render/csm.js';
import { getQuality } from './render/quality.js';
import { assetUrl } from './platform/assets.js';
import { createResolutionController } from './render/resolution.js';
import { createTouchControls } from './ui/touch-controls.js';
import { createFramePolicy, stepGameFrame } from './render/frame-policy.js';
import { installBoxFrustumCulling, markBoxCullable } from './render/box-culling.js';
import { nextFrameDeadline } from './render/frame-clock.js';
import { createGeometryWorker } from './world/geometry-worker.js';
import { createCrowdPoseAtlas } from './render/crowd-poses.js';
import { FrameTelemetry } from './render/frame-telemetry.js';
import { createPerformancePanel } from './ui/performance.js';

const params = new URLSearchParams(location.search);
const shotName = params.get('shot');
// loading screen (index.html): stage labels + progress; it fades out once the first frames and the game systems are up
const boot = window.__boot || { stage: async () => {}, sub() {}, done() {} };

const quality = getQuality();
THREE.DefaultLoadingManager.setURLModifier(assetUrl);
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false, reversedDepthBuffer: true });
const resolution = createResolutionController(renderer, quality);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping; // tone mapping done in pipeline
// (zfix) three r186 negates only polygonOffsetFactor for the reversed depth buffer, so every decal's negative
// polygonOffsetUnits ("pull toward the camera") pushed it AWAY: face-on (no depth slope, the factor term ~0) coplanar
// decals lost / flickered against the surface below. Re-issue the offset with both terms negated.
if (renderer.capabilities.reversedDepthBuffer && !params.has('nozfix')) {
  const gl = renderer.getContext(), st = renderer.state, setMat = st.setMaterial;
  st.setMaterial = function (material, frontFaceCW, clip) {
    setMat.call(this, material, frontFaceCW, clip);
    if (material.polygonOffset) gl.polygonOffset(-material.polygonOffsetFactor, -material.polygonOffsetUnits);
  };
}
document.body.appendChild(renderer.domElement);

let ctxBoxCulling = null;
const scene = new THREE.Scene();
// far plane 150 km (foundation agent): the harbour, far shores and distant hinterland run out to the (fogged) true
// horizon instead of being clipped into a hard band at 6 km (reversed float depth keeps precision at this range)
const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, quality.cameraFar ?? 150000);

const lighting = createLighting({ renderer, scene });
const world = await buildCity({ scene, renderer });
if (quality.mobile && !params.has('noruntimecache')) {
  ctxBoxCulling = installBoxFrustumCulling(); markBoxCullable(scene);
}
const crowdPoses = quality.mobile && !params.has('nopose') ? createCrowdPoseAtlas(renderer, world.life?.crowd) : null;
const geometryWorker = quality.mobile && !params.has('noworker') ? createGeometryWorker() : null;
world.streamer?.setWorker(geometryWorker);
const input = createInput(renderer.domElement);
await boot.stage('player');
const player = await createPlayer({ scene, world, camera, input, renderer });
await boot.stage('shaders');
const hud = createHud({ player, world, camera });
const pipeline = createPipeline({ renderer, scene, camera, lighting });
resolution.attach(pipeline); pipeline.setPoseAtlas?.(crowdPoses);

const resize = () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); resolution.resize();
  window.__ctx?.framePolicy?.invalidate();
};
addEventListener('resize', resize);
window.visualViewport?.addEventListener('resize', resize);

const ctx = { THREE, renderer, scene, camera, lighting, world, player, hud, pipeline, input, quality, resolution, boxCulling: ctxBoxCulling, geometryWorker, crowdPoses };
ctx.systems = ctx.systems || []; // C5: game systems (src/game/**) push {update(dt)} here
ctx.framePolicy = createFramePolicy(ctx);
ctx.telemetry = new FrameTelemetry();
window.__ctx = ctx;
ctx.diagnostics = createPerformancePanel(ctx);
ctx.systems.push(ctx.diagnostics);
const touchControls = ctx.touchControls = createTouchControls(ctx);
if (touchControls) ctx.systems.push(touchControls);
// Release latched gestures and stop GPU submissions while Safari suspends the tab or loses the GL context.
let contextLost = false;
const contextMessage = document.createElement('button');
contextMessage.textContent = 'Graphics context interrupted — tap to reload if it does not recover.';
contextMessage.style.cssText = 'display:none;position:fixed;inset:35% 10%;z-index:1100;background:#091325;color:white;border:1px solid #e3262f;border-radius:12px;padding:24px;font:16px system-ui';
contextMessage.addEventListener('click', () => location.reload()); document.body.appendChild(contextMessage);
renderer.domElement.addEventListener('webglcontextlost', e => { e.preventDefault(); contextLost = true;
  input.clear(); touchControls?.clear(); resolution.reset(); ctx.telemetry.reset(); contextMessage.style.display = 'block'; });
renderer.domElement.addEventListener('webglcontextrestored', () => { contextLost = false;
  pipeline.resetHistory?.(); resolution.resize(); contextMessage.style.display = 'none'; });
document.addEventListener('visibilitychange', () => { input.clear(); touchControls?.clear(); resolution.reset(); ctx.telemetry.reset(); });
// (perf r3) queue every shader program the game can draw (main pass + the river mirror's unshadowed variant + the
// post passes) before the first frame: they link in parallel on the driver's threads during the loading frame instead
// of one by one later, each freezing the game for 0.2-6 s the first time its material came into view
// (render/warmup.js). ?nowarm = old behaviour (A/B)
const warmup = !shotName && !params.has('nowarm') ? createWarmup(renderer, scene, camera, { mirrorLayers: quality.mobile ? null : [REFL_LAYER, BIG_CASTER_LAYER], perStep: quality.mobile ? 2 : 4 }) : null;
// first the state the first frame would set that is part of the program keys: the sky IBL (scene.environment, from the
// first lighting update) and the pipeline's NO_SSR material defines
ctx.warmup = warmup;
if (warmup) {
  lighting.update(camera); pipeline.prepareMaterials?.(); warmup.rescan();
  if (quality.mobile) { // yield between small compile batches instead of one large synchronous flush
    while (warmup.pending) { warmup.step(); await new Promise(r => setTimeout(r, 16)); }
  } else warmup.flush();
  await warmup.settle(k => boot.sub(k));
}
await boot.stage('frame');
let framesDrawn = 0;
const systemsReady = shotName ? Promise.resolve() : import('./game/systems/index.js').then(m => m.initSystems(ctx)).catch(e => console.error('[systems] init failed', e)) // open-world systems (C5)
  .then(() => import('./game/combat/index.js')).then(m => m.initCombat(ctx)).catch(e => console.error('[combat] init failed', e)) // combat (C5)
  .then(() => warmup?.rescan()); // (perf r3) + the meshes the systems / combat added (trickled by warmup.step)
// the loading screen goes once the game systems (HUD, save position) are in and a few frames have been drawn
systemsReady.then(async () => { boot.sub(0.8); while (framesDrawn < 4) await new Promise(r => requestAnimationFrame(r)); boot.done(); });
ctx.timeScale = 1; // global game-time scale (combat hit-stop / slow-mo); ctx.realDt = unscaled frame time

if (shotName) {
  const shot = SHOTS[shotName];
  if (!shot) throw new Error('unknown shot ' + shotName);
  shot.apply(ctx);
  // Warm up: let shadows, TAA/accumulation, streaming settle.
  const dt = 1 / 60;
  for (let i = 0; i < (shot.frames ?? 90); i++) {
    shot.tick?.(ctx, dt, i);
    world.update(dt, camera); lighting.update(camera); hud.update(dt);
    pipeline.render(dt);
    await new Promise(r => requestAnimationFrame(r));
  }
  window.__shotInfo = `${renderer.info.render.calls} calls, ${renderer.info.render.triangles} tris`;
  window.__shotReady = true;
} else {
  let lastFrame = null, nextFrame = 0;
  const interval = quality.targetFps ? 1000 / quality.targetFps : 0;
  function frame(realDt) {
    ctx.realDt = realDt;
    const dt = ctx.realDt * (ctx.timeScale ?? 1);
    stepGameFrame(ctx, dt);
    if (++framesDrawn === 1) boot.sub(0.4); // the first frame (remaining uploads / links) is in
  }
  // tools (tools/film.mjs): ctx.manualStep = true pauses the real-time loop; ctx.stepFrame(dt) then advances exactly one
  // frame of dt seconds (deterministic frame-by-frame captures of fast motion)
  ctx.stepFrame = dt => frame(dt);
  renderer.setAnimationLoop(now => {
    if (document.hidden || contextLost || ctx.manualStep) { lastFrame = null; nextFrame = 0; return; }
    if (interval && now + 0.75 < nextFrame) return;
    const realDt = lastFrame == null ? 1 / (quality.targetFps || 60) : (now - lastFrame) / 1000;
    lastFrame = now; nextFrame = nextFrameDeadline(nextFrame, now, interval);
    if (framesDrawn >= 4 && ctx.flow?.isPlaying) resolution.observeFrame(realDt);
    frame(Math.min(realDt, 1 / 20));
    ctx.telemetry.observe(realDt, ctx.flow?.mode ?? 'play');
  });
}
