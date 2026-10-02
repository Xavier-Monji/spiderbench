import { build, resolveConfig } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { resolveCdnBase, validateCdnBase } from './cdn-base.mjs';

export function makeLauncher(base) {
  const url = JSON.stringify(validateCdnBase(base)).replaceAll('<', '\\u003c');
  // jsDelivr deliberately serves HTML as text/plain + nosniff. Fetch the document instead of navigating
  // to it, and inject its immutable CDN directory BEFORE the relative CSS/module/preload links.
  // Runtime fetch/Three URLs derive that same absolute directory from import.meta.url in the bundle.
  return `<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Spiderbench</title><body style="margin:0;background:#040509;color:white">Loading Spiderbench…<script>window.__spiderbenchQuality='mobile';let b=${url};fetch(b+'index.html').then(r=>{if(!r.ok)throw Error('CDN '+r.status);return r.text()}).then(t=>{if(!t.includes('type="module"'))throw Error('Invalid CDN document');document.open();document.write(t.replace('<head>','<head><base href="'+b+'">'));document.close()}).catch(e=>document.body.textContent='Could not start: '+e.message)<\/script>`;
}

export async function writeLauncher(base, metadata = {}) {
  base = validateCdnBase(base);
  const launcher = makeLauncher(base);
  const uri = 'data:text/html;charset=utf-8;base64,' + Buffer.from(launcher).toString('base64');
  await mkdir('deployment', { recursive: true });
  await writeFile('deployment/launcher.html', launcher + '\n');
  await writeFile('deployment/launcher.data-uri.txt', uri + '\n');
  const info = { base, buildBase: './', quality: 'mobile', entry: base + 'index.html',
    launcherBytes: Buffer.byteLength(launcher), dataUriBytes: Buffer.byteLength(uri), published: false, ...metadata };
  await writeFile('deployment/build-info.json', JSON.stringify(info, null, 2) + '\n');
  console.log(`\nCDN base: ${base}\nLauncher: deployment/launcher.html (${info.launcherBytes} bytes)\nData URI: deployment/launcher.data-uri.txt (${info.dataUriBytes} bytes)`);
  return info;
}

export async function buildCdn() {
  const config = await resolveConfig({ mode: 'cdn' }, 'build');
  await build({ mode: 'cdn' });
  const html = await readFile(path.resolve(config.root, config.build.outDir, 'index.html'), 'utf8');
  if (config.base !== './' || !html.includes('./assets/')) throw new Error('Built document is not portable');
  await writeLauncher(resolveCdnBase());
  console.log('Portable build complete. Publishing is a separate operation: npm run publish:cdn.');
}
if (process.argv[1] && import.meta.url === new URL(`file://${path.resolve(process.argv[1])}`).href) await buildCdn();
