import { prepareMobileAssets } from './mobile-assets.mjs';
import { mkdir, copyFile, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';

export function mobileAssetsPlugin({ mobileOnly = false } = {}) {
  let config, assets;
  const prepare = () => assets ??= prepareMobileAssets(config.root);
  return {
    name: 'spiderbench-mobile-assets',
    configResolved(c) { config = c; },
    async buildStart() { await prepare(); },
    async configureServer(server) {
      const { cache } = await prepare();
      server.middlewares.use(async (req, res, next) => {
        const prefix = config.base + 'assets/mobile/';
        const url = new URL(req.url, 'http://vite.local');
        if (!url.pathname.startsWith(prefix)) return next();
        const relative = decodeURIComponent(url.pathname.slice(prefix.length));
        const file = path.resolve(cache, relative);
        if (!file.startsWith(cache + path.sep) || !relative || relative === 'manifest.json') { res.statusCode = 404; res.end(); return; }
        try {
          const data = await readFile(file), ext = path.extname(file);
          res.setHeader('Content-Type', { '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' }[ext] || 'application/octet-stream');
          res.setHeader('Access-Control-Allow-Origin', '*'); res.end(data);
        } catch { res.statusCode = 404; res.end('Mobile asset not found'); }
      });
    },
    async closeBundle() {
      if (config.command !== 'build') return;
      const { cache, report } = await prepare(), out = path.resolve(config.root, config.build.outDir);
      for (const file of report.files) {
        const dest = path.join(out, 'assets', mobileOnly ? '' : 'mobile', file.name);
        await mkdir(path.dirname(dest), { recursive: true }); await copyFile(path.join(cache, file.name), dest);
      }
      // Stable, useful diagnostics; keep cache fingerprints/mtime out of the distributable.
      const files = report.files.map(({ fingerprint, ...file }) => file);
      await writeFile(path.join(out, 'mobile-assets.json'), JSON.stringify({ ...report, mobileOnly, files }, null, 2) + '\n');
      console.log(`[mobile assets] Estimated mipmapped RGBA: ${(report.gpuBefore / 1048576).toFixed(1)} -> ${(report.gpuAfter / 1048576).toFixed(1)} MiB (listed textures only)`);
    },
  };
}
