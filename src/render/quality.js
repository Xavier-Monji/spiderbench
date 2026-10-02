// Desktop presets are unchanged. Touch/mobile/4 GB devices default to the bounded mobile profile.
import { getDevice } from '../platform/device.js';

export const PRESETS = {
  mobile: {
    name: 'mobile', mobile: true,
    // Keep one nearby building-shadow map, sky IBL, material detail, clouds, bloom and FXAA.
    cascades: 1, shadowMapSize: 1024, shadowFar: 140, splits: [0.1, 140], shadowTaps: 3,
    charShadow: 0, ao: false, aoHalfRes: true, aoQuality: 'Performance',
    ssr: false, ssgi: false, taa: false, shafts: false, wet: false, planarReflections: false,
    cloudSteps: 10, cloudLightSteps: 2, cloudNoiseSize: 64, envSize: 64,
    bloomLevels: 3, dofTaps: 0, mbSamples: 0, sharpen: 0.15,
    pixelRatioCap: 1.25, renderScale: 0.85, minRenderScale: 0.6, maxBufferPixels: 1000000,
    targetFps: 30, cameraFar: 6000, facadeNear: 420, detailFar: 240, worldFar: 2400,
    propFar: 1000, textureAnisotropy: 4, collisionCell: 0.05,
    streamResidentBytes: 64 * 1048576, streamBootBytes: 24 * 1048576, streamBootTiles: 12,
  },
  low: {
    name: 'low',
    cascades: 2, shadowMapSize: 1024, shadowFar: 500, splits: [0.1, 30, 500], shadowTaps: 5,
    ao: false, aoHalfRes: true, aoQuality: 'Performance',
    cloudSteps: 10, cloudLightSteps: 2, envSize: 64,
    taa: true, bloomLevels: 5, dofTaps: 16, mbSamples: 6, sharpen: 0.25,
    charShadow: 0, ssr: false, shafts: false, shaftSteps: 0,
    ssgi: false, wet: false, // (lighting2 r1)
  },
  med: {
    name: 'med',
    cascades: 3, shadowMapSize: 2048, shadowFar: 900, splits: [0.1, 18, 90, 900], shadowTaps: 8,
    ao: true, aoHalfRes: true, aoQuality: 'Low',
    cloudSteps: 16, cloudLightSteps: 3, envSize: 128,
    taa: true, bloomLevels: 6, dofTaps: 22, mbSamples: 8, sharpen: 0.3,
    charShadow: 1024, ssr: true, ssrSteps: 20, shafts: true, shaftSteps: 12,
    ssgi: true, ssgiDirs: 4, ssgiSteps: 4, wet: true, // (lighting2 r1)
  },
  high: {
    name: 'high',
    // (foundation agent: a 5th, half-res cascade reaches 3 km so aerial views keep building / street-canyon shadows)
    cascades: 5, shadowMapSize: 2048, shadowFar: 3000, splits: [0.1, 14, 50, 200, 800, 3000], shadowTaps: 10,
    ao: true, aoHalfRes: false, aoQuality: 'Medium',
    cloudSteps: 22, cloudLightSteps: 3, envSize: 128,
    taa: true, bloomLevels: 6, dofTaps: 43, mbSamples: 10, sharpen: 0.35,
    charShadow: 2048, ssr: true, ssrSteps: 28, shafts: true, shaftSteps: 16,
    ssgi: true, ssgiDirs: 6, ssgiSteps: 4, wet: true, // (lighting2 r1) SSGI + wet-patch roughness
  },
};

export function selectQuality({ search = '', device = getDevice(), launchQuality } = {}) {
  const params = new URLSearchParams(search);
  let name = params.get('q') || launchQuality || (device.constrained ? 'mobile' : 'high');
  if (name === 'medium') name = 'med';
  if (!Object.hasOwn(PRESETS, name)) name = device.constrained ? 'mobile' : 'high';
  const q = { ...PRESETS[name], splits: [...PRESETS[name].splits], perf: !params.has('perfoff') };
  // Desktop ablation tools remain available. Mobile's allocation/budget invariants cannot be undone by qset.
  if (!q.mobile && params.get('qset')) {
    for (const kv of params.get('qset').split(',')) {
      const [k, v] = kv.split(':');
      if (Object.hasOwn(q, k) && !['name', 'mobile', 'splits'].includes(k)) {
        q[k] = v === 'true' ? true : v === 'false' ? false : isNaN(+v) ? v : +v;
      }
    }
  }
  return q;
}

let _q;
export function getQuality() {
  return _q ??= selectQuality({ search: globalThis.location?.search ?? '',
    launchQuality: globalThis.__spiderbenchQuality });
}
