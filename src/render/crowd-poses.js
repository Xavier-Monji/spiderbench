// Bake each visible person's 18 affine bone matrices once on the GPU, not 2 animation frames / 2 clips
// for EVERY vertex and again in the shadow pass. Same clips, crossfades, head turns and mesh detail.
// RGBA32F preserves the original animation precision. Unsupported float render targets keep vertex skinning.
import * as THREE from 'three';
import { FSPass, makeRT } from './common.js';
import { GLSL_BONE_TRANSFORMS } from '../world/npc/bone-shader.js';

export function createCrowdPoseAtlas(renderer, crowd) {
  if (!crowd?.animation || !renderer.extensions.has('EXT_color_buffer_float')) return null;
  const anim = crowd.animation, pools = crowd.pools;
  let capacity = 512, lastFrame = -1, ready = false, disabled = false;
  const limit = Math.min(8192, renderer.capabilities.maxTextureSize);
  const rt = makeRT(anim.nb * 3, capacity, { type: THREE.FloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  const input = new THREE.DataTexture(new Float32Array(capacity * 12), 3, capacity, THREE.RGBAFormat, THREE.FloatType);
  input.minFilter = input.magFilter = THREE.NearestFilter; input.needsUpdate = true;
  const pass = new FSPass({ name: 'crowdPoses', uniforms: {
    uInput: { value: input }, uCount: { value: 0 }, uAnim: { value: anim.texture }, uTime: anim.uniforms.uTime,
    uNeck: { value: new THREE.Vector3(...anim.bones[3].head) }, uHead: { value: new THREE.Vector3(...anim.bones[4].head) },
  }, fragmentShader: /* glsl */`
precision highp float;
precision highp sampler2D;
in vec2 vUv; out vec4 fragColor;
uniform sampler2D uInput, uAnim; uniform int uCount; uniform float uTime; uniform vec3 uNeck, uHead;
vec4 iA, iB, iX;
${GLSL_BONE_TRANSFORMS}
void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  if (p.y >= uCount) { fragColor = vec4(0.0); return; }
  iA = texelFetch(uInput, ivec2(0, p.y), 0); iB = texelFetch(uInput, ivec2(1, p.y), 0); iX = texelFetch(uInput, ivec2(2, p.y), 0);
  float w = clamp((uTime - iX.x) / 0.3, 0.0, 1.0);
  mat4 m = boneM(p.x / 3, w); int row = p.x % 3;
  fragColor = vec4(m[0][row], m[1][row], m[2][row], m[3][row]);
}` });
  crowd.enablePoseAtlas(rt.texture);
  const stats = { people: 0, bakedFrames: 0, reusedFrames: 0, bytes: rt.width * rt.height * 16 + capacity * 12 * 4 };
  return {
    texture: rt.texture,
    get stats() { return { ...stats, capacity, supported: true, disabled }; },
    reset() { ready = false; },
    prepare() {
      if (disabled) return false;
      if (crowd.frame === lastFrame) {
        if (ready) { stats.reusedFrames++; return false; }
        // Context recovery: iB.x already contains row ids. Re-upload the saved raw input, do not bake it again.
        input.needsUpdate = true; if (stats.people) pass.render(renderer, rt);
        ready = true; stats.bakedFrames++; return !!stats.people;
      }
      let count = 0; for (const pool of pools) count += pool.n;
      if (count > limit) { crowd.disablePoseAtlas(); disabled = true; return false; }
      if (count > capacity) {
        capacity = Math.min(limit, 2 ** Math.ceil(Math.log2(count)));
        rt.setSize(anim.nb * 3, capacity); input.dispose();
        input.image = { data: new Float32Array(capacity * 12), width: 3, height: capacity };
        stats.bytes = rt.width * rt.height * 16 + capacity * 12 * 4;
      }
      const data = input.image.data; let row = 0;
      for (const pool of pools) {
        const source = pool.ib.array;
        for (let i = 0; i < pool.n; i++, row++) {
          const a = i * 20, b = row * 12;
          for (let k = 0; k < 12; k++) data[b + k] = source[a + k];
          source[a + 4] = row; // iB.x becomes a pose row ONLY after copying the original previous clip.
        }
        if (pool.n) pool.ib.needsUpdate = true;
      }
      input.needsUpdate = true; pass.uniforms.uCount.value = count;
      if (count) pass.render(renderer, rt);
      ready = true; lastFrame = crowd.frame; stats.people = count; stats.bakedFrames++;
      return !!count;
    },
    dispose() { rt.dispose(); input.dispose(); pass.material.dispose(); const i = FSPass.all.indexOf(pass); if (i >= 0) FSPass.all.splice(i, 1); },
  };
}
