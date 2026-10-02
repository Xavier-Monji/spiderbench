import { defineConfig } from 'vite';
import { mobileAssetsPlugin } from './scripts/vite-mobile-assets.mjs';

export default defineConfig(({ mode }) => {
  const cdn = mode === 'cdn';
  // Portable artifacts can be pinned to their own commit AFTER building, without a self-referential hash.
  // The tiny launcher sets the document base; runtime assets derive the same root from the module URL.
  const base = cdn ? './' : '/';
  return {
    base,
    define: { __MOBILE_ASSETS_ONLY__: JSON.stringify(cdn) },
    plugins: [mobileAssetsPlugin({ mobileOnly: cdn })],
    server: { host: '0.0.0.0', allowedHosts: ['.e2b.app'], cors: true },
    preview: { host: '0.0.0.0', allowedHosts: ['.e2b.app'], cors: true },
    // Keep top-level await, while transpiling the rest for current Safari/WebGL2 browsers.
    build: { target: ['es2022', 'safari16'], chunkSizeWarningLimit: 2500, manifest: true },
  };
});
