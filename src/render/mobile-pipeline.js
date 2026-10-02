// A separate allocation path, not a desktop pipeline with its expensive passes merely switched off.
// Scene + half-res atmospheric sky -> small emissive bloom -> fog/grade -> FXAA. No history, masks, GI,
// reflections, DoF, motion blur, auto-exposure readbacks or full-resolution ping-pong post buffers.
import * as THREE from 'three';
import { FSPass, makeRT, GLSL_DEPTH, GLSL_COLOR } from './common.js';
import { GLSL_SKY_COMMON } from './sky.js';

// Half-float HDR can overflow on tiny sun/specular highlights. Inf/Inf in bloom or ACES otherwise spreads NaNs
// into black cross-shaped blocks. Clamp only radiances far beyond display white, before doing that arithmetic.
const SAFE_HDR = `vec3 safeHDR(vec3 c) {
  c = vec3(isnan(c.r) ? 128.0 : c.r, isnan(c.g) ? 128.0 : c.g, isnan(c.b) ? 128.0 : c.b);
  return clamp(c, vec3(0.0), vec3(128.0));
}`;

export function createMobilePipeline({ renderer, scene, camera, lighting }) {
  const hdr = renderer.extensions.has('EXT_color_buffer_float') ? THREE.HalfFloatType : THREE.UnsignedByteType;
  const reversed = !!renderer.capabilities.reversedDepthBuffer;
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  let W = size.x, H = size.y;
  const depth = new THREE.DepthTexture(W, H, reversed ? THREE.FloatType : THREE.UnsignedIntType);
  depth.format = THREE.DepthFormat; depth.minFilter = depth.magFilter = THREE.NearestFilter;
  const sceneRT = makeRT(W, H, { type: hdr, depthBuffer: true, depthTexture: depth });
  const skyRT = makeRT(W / 2, H / 2, { type: hdr });
  const gradedRT = makeRT(W, H, { type: THREE.UnsignedByteType });
  const bloomA = makeRT(W / 4, H / 4, { type: hdr }), bloomB = makeRT(W / 4, H / 4, { type: hdr });
  const grade = {
    exposure: 1, saturation: 1.04, contrast: 1.04, vignette: 0.12, grain: 0,
    bloom: 0.1, bloomThreshold: 1.4, autoExposure: false,
    lift: new THREE.Vector3(), gain: new THREE.Vector3(1, 1, 1), gamma: new THREE.Vector3(1, 1, 1),
  };
  const bloom = new FSPass({ name: 'mobileBloom',
    uniforms: { uSrc: { value: sceneRT.texture }, uPx: { value: new THREE.Vector2() }, uThreshold: { value: 1.4 } },
    fragmentShader: `precision highp float; in vec2 vUv; out vec4 fragColor;
      uniform sampler2D uSrc; uniform vec2 uPx; uniform float uThreshold;
      ${SAFE_HDR}
      vec3 tap(vec2 uv) { vec3 c = safeHDR(texture(uSrc, uv).rgb); float m = max(c.r, max(c.g, c.b));
        return c * max(0.0, m - uThreshold) / max(m, 0.001); }
      void main() { vec3 c = tap(vUv) * 0.4;
        c += (tap(vUv + uPx) + tap(vUv - uPx) + tap(vUv + vec2(uPx.x, -uPx.y)) + tap(vUv + vec2(-uPx.x, uPx.y))) * 0.15;
        fragColor = vec4(c, 1.0); }`,
  });
  const blur = new FSPass({ name: 'mobileBloomBlur',
    uniforms: { uSrc: { value: bloomA.texture }, uPx: { value: new THREE.Vector2() } },
    fragmentShader: `precision highp float; in vec2 vUv; out vec4 fragColor; uniform sampler2D uSrc; uniform vec2 uPx;
      void main() { vec3 c = texture(uSrc, vUv).rgb * 0.2;
        c += (texture(uSrc, vUv + vec2(uPx.x, 0.0)).rgb + texture(uSrc, vUv - vec2(uPx.x, 0.0)).rgb
          + texture(uSrc, vUv + vec2(0.0, uPx.y)).rgb + texture(uSrc, vUv - vec2(0.0, uPx.y)).rgb) * 0.2;
        fragColor = vec4(c, 1.0); }`,
  });
  const composite = new FSPass({ name: 'mobileComposite', uniforms: {
    ...lighting.sky.skyUniforms,
    uSkyPx: { value: new THREE.Vector2(1 / skyRT.width, 1 / skyRT.height) },
    uColor: { value: sceneRT.texture }, uDepth: { value: depth }, uSky: { value: skyRT.texture }, uBloom: { value: bloomB.texture },
    uProjInv: { value: new THREE.Matrix4() }, uCamWorld: { value: new THREE.Matrix4() }, uCamPos: { value: new THREE.Vector3() },
    uReversed: { value: reversed ? 1 : 0 }, uFogDensity: { value: 0 }, uFogFalloff: { value: 0 }, uFogStart: { value: 35 },
    uFogTint: { value: new THREE.Color() }, uExposure: { value: 1 }, uBloomStrength: { value: 0.1 },
    uSaturation: { value: 1.04 }, uContrast: { value: 1.04 }, uVignette: { value: 0.12 }, uAspect: { value: W / H },
    uLift: { value: grade.lift }, uGain: { value: grade.gain }, uGamma: { value: grade.gamma },
    uMoonDir: { value: new THREE.Vector3(0, 1, 0) }, uMoonK: { value: 0 },
  }, fragmentShader: /* glsl */`
precision highp float; in vec2 vUv; out vec4 fragColor;
uniform sampler2D uColor, uDepth, uSky, uBloom; uniform vec2 uSkyPx;
uniform mat4 uCamWorld; uniform vec3 uCamPos, uFogTint, uLift, uGain, uGamma, uMoonDir;
uniform float uFogDensity, uFogFalloff, uFogStart, uExposure, uBloomStrength, uSaturation, uContrast, uVignette, uAspect, uMoonK;
${GLSL_DEPTH}
${GLSL_SKY_COMMON}
${GLSL_COLOR}
${SAFE_HDR}
const mat3 ACESIn = mat3(0.59719,0.07600,0.02840,0.35458,0.90834,0.13383,0.04823,0.01566,0.83777);
const mat3 ACESOut = mat3(1.60475,-0.10208,-0.00327,-0.53108,1.10813,-0.07276,-0.07367,-0.00605,1.07602);
vec3 aces(vec3 c) {
  c = ACESIn * c;
  vec3 r = (c * (c + 0.0245786) - 0.000090537) / (c * (0.983729 * c + 0.4329510) + 0.238081);
  vec3 toe = c * 0.18;
  r = 0.5 * (r + toe + sqrt((r-toe)*(r-toe) + 0.01*(r+toe)*(r+toe)));
  return clamp(ACESOut * r, 0.0, 1.0);
}
void main() {
  float d = texture(uDepth, vUv).r;
  vec3 dir = normalize((uCamWorld * vec4(viewDirFromUv(vUv), 0.0)).xyz);
  vec3 c;
  if (isSky(d)) {
    vec4 s = texture(uSky, vUv) * 0.5;
    s += (texture(uSky, vUv + vec2(uSkyPx.x, 0.0)) + texture(uSky, vUv - vec2(uSkyPx.x, 0.0))
      + texture(uSky, vUv + vec2(0.0, uSkyPx.y)) + texture(uSky, vUv - vec2(0.0, uSkyPx.y))) * 0.125;
    c = safeHDR(s.rgb);
    float a = acos(clamp(dot(dir, uSunDir), -1.0, 1.0));
    c += uSunColor * 70.0 * (1.0 - smoothstep(0.0044, 0.0052, a)) * s.a;
    float ma = acos(clamp(dot(dir, uMoonDir), -1.0, 1.0));
    c += vec3(0.9, 0.92, 1.0) * 1.5 * (1.0 - smoothstep(0.0067, 0.0078, ma)) * uMoonK * s.a;
  } else {
    c = safeHDR(texture(uColor, vUv).rgb);
    float dist = min(length(viewPosFromDepth(vUv, d)), 6000.0), dd = max(dist - uFogStart, 0.0);
    float kr = uFogFalloff * dir.y;
    float od = uFogDensity * exp(-uFogFalloff * max(uCamPos.y, 0.0));
    od *= abs(kr * dd) < 0.001 ? dd : (1.0 - exp(-kr * dd)) / kr;
    od *= mix(0.45, 1.3, smoothstep(150.0, 2600.0, dist)); od /= 1.0 + od * 0.22;
    vec3 trans = exp(-od * vec3(0.86, 1.0, 1.16));
    // The horizon skirt is already in the fog, even with the bounded mobile far plane.
    trans *= 1.0 - smoothstep(4200.0, 5700.0, dist);
    vec3 fog = skyLUT(normalize(vec3(dir.x, max(dir.y * 0.3, 0.012) + 0.05 * clamp(-dir.y * 2.0, 0.0, 1.0), dir.z))) * uFogTint;
    c = c * trans + fog * (1.0 - trans);
  }
  c += safeHDR(texture(uBloom, vUv).rgb) * uBloomStrength;
  c *= uExposure;
  c *= 1.0 - smoothstep(0.25, 1.05, length((vUv - 0.5) * vec2(uAspect, 1.0))) * uVignette;
  c = aces(safeHDR(c));
  c = pow(max(uGain * (c + uLift * (1.0 - c)), 0.0), 1.0 / max(uGamma, vec3(0.01)));
  c = mix(vec3(luma(c)), c, uSaturation);
  c = exp2((log2(max(c, 0.0001)) - log2(0.18)) * uContrast + log2(0.18));
  c = mix(c, 0.62 + 0.37 * (1.0 - exp(-max(c - 0.62, 0.0) / 0.37)), step(0.62, c));
  fragColor = vec4(linearToSRGB(clamp(c, 0.0, 1.0)), 1.0);
}` });
  const fxaa = new FSPass({ name: 'mobileFXAA',
    uniforms: { uSrc: { value: gradedRT.texture }, uPx: { value: new THREE.Vector2(1 / W, 1 / H) } },
    fragmentShader: /* glsl */`
precision highp float; in vec2 vUv; out vec4 fragColor; uniform sampler2D uSrc; uniform vec2 uPx;
float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
void main() {
  vec3 c = texture(uSrc, vUv).rgb;
  float nw = lum(texture(uSrc, vUv - uPx).rgb), ne = lum(texture(uSrc, vUv + vec2(uPx.x, -uPx.y)).rgb);
  float sw = lum(texture(uSrc, vUv + vec2(-uPx.x, uPx.y)).rgb), se = lum(texture(uSrc, vUv + uPx).rgb), m = lum(c);
  float lo = min(m, min(min(nw, ne), min(sw, se))), hi = max(m, max(max(nw, ne), max(sw, se)));
  if (hi - lo < max(0.0312, hi * 0.125)) { fragColor = vec4(c, 1.0); return; }
  vec2 dir = vec2(-(nw + ne - sw - se), nw + sw - ne - se);
  float reduce = max((nw + ne + sw + se) * 0.03125, 0.0078125);
  dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + reduce), vec2(-8.0), vec2(8.0)) * uPx;
  vec3 a = 0.5 * (texture(uSrc, vUv + dir * (-1.0/6.0)).rgb + texture(uSrc, vUv + dir * (1.0/6.0)).rgb);
  vec3 b = a * 0.5 + 0.25 * (texture(uSrc, vUv - dir * 0.5).rgb + texture(uSrc, vUv + dir * 0.5).rgb);
  float lb = lum(b); fragColor = vec4(lb < lo || lb > hi ? a : b, 1.0);
}` });

  renderer.toneMapping = THREE.NoToneMapping; renderer.info.autoReset = false;
  let stats = { calls: 0, triangles: 0 };
  const pipeline = {
    grade, passes: { composite, final: fxaa }, gmirror: null, ao: null,
    get size() { return { W, H }; }, get stats() { return { ...stats }; },
    setSize(w, h) {
      W = Math.max(1, Math.floor(w * renderer.getPixelRatio())); H = Math.max(1, Math.floor(h * renderer.getPixelRatio()));
      sceneRT.setSize(W, H); gradedRT.setSize(W, H); skyRT.setSize(Math.max(1, W >> 1), Math.max(1, H >> 1));
      bloomA.setSize(Math.max(1, W >> 2), Math.max(1, H >> 2)); bloomB.setSize(Math.max(1, W >> 2), Math.max(1, H >> 2));
      fxaa.uniforms.uPx.value.set(1 / W, 1 / H);
      composite.uniforms.uSkyPx.value.set(1 / skyRT.width, 1 / skyRT.height);
    },
    render() {
      renderer.info.reset();
      renderer.setRenderTarget(sceneRT); renderer.setClearColor(0, 1); renderer.clear(); renderer.render(scene, camera);
      lighting.sky.renderSkyPass(skyRT, camera, depth, W, H, 0, reversed); // stable noise without TAA
      bloom.uniforms.uPx.value.set(2 / W, 2 / H); bloom.uniforms.uThreshold.value = grade.bloomThreshold;
      bloom.render(renderer, bloomA); blur.uniforms.uPx.value.set(2 / bloomA.width, 2 / bloomA.height); blur.render(renderer, bloomB);
      const u = composite.uniforms, fog = lighting.fog, tod = lighting.tod;
      u.uProjInv.value.copy(camera.projectionMatrixInverse); u.uCamWorld.value.copy(camera.matrixWorld); u.uCamPos.value.copy(camera.position);
      u.uFogDensity.value = fog.density; u.uFogFalloff.value = fog.heightFalloff; u.uFogStart.value = fog.startDistance; u.uFogTint.value.copy(fog.tint);
      u.uMoonDir.value.copy(lighting.moon.dir); u.uMoonK.value = lighting.moon.k;
      u.uExposure.value = grade.exposure * tod.exposure; u.uBloomStrength.value = grade.bloom * tod.bloom;
      u.uSaturation.value = grade.saturation; u.uContrast.value = grade.contrast; u.uVignette.value = grade.vignette; u.uAspect.value = W / H;
      composite.render(renderer, gradedRT); fxaa.render(renderer, null);
      stats = { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles };
    },
    // API compatibility: mobile intentionally never allocates these effects, including in photo mode.
    setFocus() {}, setAperture() {}, setDof() {}, setDofFar() {}, setAutoFocus() {}, setMotionBlur() {},
    resetHistory() {}, resetExposure() {}, timings() { return {}; }, prepareMaterials() {},
    dispose() { for (const rt of [sceneRT, skyRT, gradedRT, bloomA, bloomB]) rt.dispose();
      for (const pass of [bloom, blur, composite, fxaa]) { pass.material.dispose(); const i = FSPass.all.indexOf(pass); if (i >= 0) FSPass.all.splice(i, 1); } },
  };
  return pipeline;
}
