import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isStreamBufferAbort } from '../scripts/cdn-media.mjs';

test('only intentional music media-buffer cancellations are classified separately from failed assets', () => {
  const base = 'https://cdn.jsdelivr.net/gh/owner/repo@sha/dist/';
  const request = { url: base + 'assets/audio/music_day.ogg', resourceType: 'media', error: 'net::ERR_ABORTED' };
  assert.equal(isStreamBufferAbort(request, base), true);
  assert.equal(isStreamBufferAbort({ ...request, url: base + 'assets/audio/music_pulseA.m4a' }, base), true);
  for (const change of [{ resourceType: 'fetch' }, { resourceType: 'script' }, { error: 'net::ERR_CONNECTION_RESET' },
    { error: 'net::ERR_FAILED' }, { url: base + 'assets/spiderman.glb' }, { url: base + 'assets/audio/sfx_ui.ogg' },
    { url: 'https://other.example/assets/audio/music_day.ogg' }]) {
    assert.equal(isStreamBufferAbort({ ...request, ...change }, base), false);
  }
});
