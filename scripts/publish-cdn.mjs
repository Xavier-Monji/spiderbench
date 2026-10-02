// Publish a small, immutable dist-only commit without changing branches or checking out over source assets.
// Its commit is kept reachable as the second parent of the source commit on the session branch.
import { execFileSync } from 'node:child_process';
import { readdir, readFile, stat, rm, mkdir, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { CDN_REPOSITORY, SESSION_BRANCH } from './cdn-base.mjs';
import { writeLauncher } from './build-cdn.mjs';

const git = (args, env = process.env) => execFileSync('git', args, { env, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] }).trim();
if (git(['branch', '--show-current']) !== SESSION_BRANCH) throw new Error(`Publishing is restricted to ${SESSION_BRANCH}`);
if (path.resolve(git(['rev-parse', '--show-toplevel'])) !== process.cwd()) throw new Error('Run from the repository root');
const head = git(['rev-parse', 'HEAD']);
git(['diff', '--check']);
const manifest = JSON.parse(await readFile('dist/mobile-assets.json', 'utf8'));
const html = await readFile('dist/index.html', 'utf8');
if (!manifest.mobileOnly || !html.includes('./assets/')) throw new Error('Run npm run build:cdn first');
async function files(dir) {
  const all = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) all.push(...await files(file));
    else if (entry.isFile()) all.push({ path: file, bytes: (await stat(file)).size });
    else throw new Error(`Not a regular deployable file: ${file}`);
  }
  return all;
}
const assets = [...await files('dist'), { path: 'LICENSE', bytes: (await stat('LICENSE')).size }];
const bytes = assets.reduce((sum, file) => sum + file.bytes, 0);
// jsDelivr's default GitHub package/file limits; leave headroom rather than publishing source+dist together.
if (bytes > 150000000 || assets.some(file => file.bytes > 20000000)) throw new Error('Artifact exceeds jsDelivr package/file limits');
await mkdir('.cache', { recursive: true });
const index = path.resolve('.cache', `cdn-index-${randomUUID()}`), env = { ...process.env, GIT_INDEX_FILE: index };
try {
  git(['read-tree', '--empty'], env);
  git(['add', '-f', '--', 'dist', 'LICENSE'], env);
  const tree = git(['write-tree'], env);
  const commit = git(['commit-tree', tree, '-p', head, '-m', 'Deploy portable iPad game (dist and license only)']);
  const base = `https://cdn.jsdelivr.net/gh/${CDN_REPOSITORY}@${commit}/dist/`;
  await writeFile('deployment/release.json', JSON.stringify({ repository: CDN_REPOSITORY, commit, tree,
    branch: SESSION_BRANCH, files: assets.length, bytes, largestFileBytes: Math.max(...assets.map(file => file.bytes)) }, null, 2) + '\n');
  await writeLauncher(base, { commit, artifactBytes: bytes });
  // The real index contains source + launch metadata, NOT dist or caches. This preserves desktop originals.
  git(['add', '-A']);
  const sourceTree = git(['write-tree']);
  if (git(['ls-tree', '--name-only', sourceTree]).split('\n').includes('dist')) throw new Error('dist must not be in the source tree');
  const sourceCommit = git(['commit-tree', sourceTree, '-p', head, '-p', commit,
    '-m', 'Add memory-bounded iPad controls and publish immutable CDN game']);
  git(['update-ref', `refs/heads/${SESSION_BRANCH}`, sourceCommit, head]);
  console.log(`Artifact: ${commit} (${(bytes / 1048576).toFixed(1)} MiB, ${assets.length} files)\nSource: ${sourceCommit}`);
  git(['push', 'origin', SESSION_BRANCH]);
  console.log('Pushed. Verify the real CDN launch before marking build-info published.');
} finally {
  await rm(index, { force: true });
  await rm(index + '.lock', { force: true });
}
