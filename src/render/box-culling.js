// THREE's sphere culling admits many long, flat city batches and 1.4 km canopy tiles outside the image.
// A world-space AABB is tighter for these STATIC batches. This applies independently to MAIN AND SHADOW
// frusta: never hide an off-camera object before the shadow pass (it may cast a visible shadow).
import * as THREE from 'three';
import { cacheStaticTransform } from './static-transforms.js';
const STATIC_NAMES = /^(?:facade(?:Lod)?(?: |$)|detail(?: |$)|roof(?: |$)|roofAO(?: |$)|roofStreaks(?: |$)|coast-|farCity(?:Mass)?$|sidewalks$|asphalt$|markings$|streetGrime$|seawall\+parkwall$|bridgeStone$|bridgeSteel$)/;

export function markBoxCullable(scene) {
  scene.traverse(o => {
    if (!o.isMesh || o.isSkinnedMesh || !o.frustumCulled || !o.geometry || o.userData.dynamic) return;
    // Ordinary Pool/NPC instances are animated/repacked. CanopyBatch explicitly guarantees static transforms
    // and its optional vertex fade only contracts geometry, so its instance AABB remains conservative.
    if (o.isInstancedMesh ? !o.userData.staticBounds : !STATIC_NAMES.test(o.name)) return;
    if (o.isInstancedMesh) o.computeBoundingBox();
    else if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
    o.userData.boxFrustum = true; cacheStaticTransform(o);
  });
}

export function installBoxFrustumCulling() {
  if (THREE.Frustum.prototype.__boxCull) return THREE.Frustum.prototype.__boxCull;
  const original = THREE.Frustum.prototype.intersectsObject, memo = new WeakMap();
  const controller = { enabled: true, stats: { tested: 0, rejected: 0 } };
  THREE.Frustum.prototype.intersectsObject = function (o) {
    const b = o.isInstancedMesh ? o.boundingBox : o.geometry?.boundingBox;
    if (!controller.enabled || !o.userData.boxFrustum || !b || b.isEmpty()) return original.call(this, o);
    // Only tighten the existing test, never broaden it. The conjunction is still conservative and
    // keeps exact legacy visibility when a custom/shared-range sphere is intentionally restrictive.
    if (!original.call(this, o)) return false;
    const e = o.matrixWorld.elements;
    let m = memo.get(o), changed = !m || m.bounds !== b
      || !m.min.equals(b.min) || !m.max.equals(b.max);
    if (!changed) for (let i = 0; i < 16; i++) if (m.matrix[i] !== e[i]) { changed = true; break; }
    if (changed) {
      if (!m) { m = { box: new THREE.Box3(), min: new THREE.Vector3(), max: new THREE.Vector3(), matrix: new Float64Array(16) }; memo.set(o, m); }
      m.bounds = b; m.min.copy(b.min); m.max.copy(b.max); m.matrix.set(e);
      m.box.copy(b).applyMatrix4(o.matrixWorld).expandByScalar(.02); // float32 GPU boundary margin
    }
    controller.stats.tested++;
    const hit = this.intersectsBox(m.box); if (!hit) controller.stats.rejected++;
    return hit;
  };
  Object.defineProperty(THREE.Frustum.prototype, '__boxCull', { value: controller });
  return controller;
}
