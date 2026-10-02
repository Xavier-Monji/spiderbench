// Re-create the checked-in Safari-compatible AAC companions if the generated source Ogg audio changes.
// Runtime/builds do not require FFmpeg; only this optional regeneration command does.
import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
const dir = path.resolve('public/assets/audio'), ffmpeg = process.env.FFMPEG || 'ffmpeg';
for (const file of await readdir(dir)) if (file.endsWith('.ogg')) {
  const source = path.join(dir, file), output = source.replace(/\.ogg$/, '.m4a');
  const result = spawnSync(ffmpeg, ['-nostdin', '-hide_banner', '-loglevel', 'error', '-y', '-i', source,
    '-c:a', 'aac', '-b:a', '96k', '-threads', '1', '-movflags', '+faststart', output], { stdio: 'inherit' });
  if (result.error) throw new Error(`AAC regeneration needs FFmpeg (or FFMPEG=/path/to/ffmpeg): ${result.error.message}`);
  if (result.status) process.exit(result.status);
  console.log(path.relative(process.cwd(), output));
}
