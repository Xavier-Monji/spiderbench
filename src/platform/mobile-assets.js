// Shared by the build plugin and URL resolver. Preserve atlas layout (especially vertical array-texture strips).
// These are file-side reductions: Safari never has to decode the oversized originals in the mobile profile.
export const MOBILE_IMAGES = {
  'city/tex/asphalt_col.png': { width: 1024 },
  'city/tex/asphalt_nrm.png': { width: 1024 },
  'city/tex/sidewalk_nrm.png': { width: 512 },
  'city/tex/walls_col.jpg': { width: 512 },
  'city/tex/walls_nrm.webp': { width: 256 },
  'city/tex/walls_hao.jpg': { width: 256 },
  'city/tex/roof_col.png': { width: 256 },
  'city/tex/interiors.png': { width: 1024 },
  'city/tex/grass_nrm.png': { width: 512 },
  'city/tex/ts_ads.webp': { width: 2048 },
  'city/tex/ts_pavers.webp': { width: 1024 },
  'city/tex/ts_pavers_n.webp': { width: 1024 },
  'city/tex/ts_pavers_r.webp': { width: 1024 },
  'city/tex/ts_signs.webp': { width: 1024 },
  'city/tex/ts_shops.webp': { width: 1024 },
  'city/tex/vehicles_atlas2.webp': { width: 1024 },
  'city/tex/coast_atlas.webp': { width: 1024 },
  'city/npc/people_bake.webp': { width: 960 },
  'city/props/leaves_nrm.png': { width: 512 },
  'enemies/brute_basecolor.webp': { width: 1024 },
  'tex/thug_basecolor_b.webp': { width: 1024 },
  'tex/thug_basecolor_c.webp': { width: 1024 },
  // Also shrink unused/editor textures in the mobile-only CDN distribution, rather than shipping 19 MB of suit PNG.
  'tex/suit_normal.png': { width: 1024 },
  'tex/thug_basecolor.png': { width: 1024 },
  'tex/thug_basecolor_b.png': { width: 1024 },
  'tex/thug_basecolor_c.png': { width: 1024 },
};
export const MOBILE_MODELS = {
  'spiderman.glb': { normal: 1024, orm: 512, basecolor: 2048 },
  'thug.glb': { normal: 512, orm: 512, basecolor: 1024 },
};
export function hasMobileAsset(path) {
  return Object.hasOwn(MOBILE_IMAGES, path) || Object.hasOwn(MOBILE_MODELS, path);
}
