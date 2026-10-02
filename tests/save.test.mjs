import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSave } from '../src/game/systems/save.js';
test('opaque origins and disabled storage use an honest, safe in-memory save', () => {
  globalThis.location = { search: '' };
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, get() { throw new Error('SecurityError: opaque origin'); } });
  const save = createSave(); assert.equal(save.persistent, false);
  save.state.xp = 45; save.markDirty(); save.flush(); assert.equal(save.state.xp, 45);
  delete globalThis.localStorage; delete globalThis.location;
});
test('HTTP-origin persistence and deterministic playtests remain unchanged', () => {
  globalThis.location = { search: '' }; const data = new Map();
  globalThis.localStorage = { getItem: k => data.get(k) ?? null, setItem: (k,v) => data.set(k,v), removeItem: k => data.delete(k) };
  let save = createSave(); assert.equal(save.persistent, true); save.state.xp = 90; save.flush();
  assert.equal(createSave().state.xp, 90);
  location.search = '?playtest=1'; save = createSave(); assert.equal(save.persistent, false); assert.equal(save.state.xp, 0);
  location.search = '?newgame=1'; save = createSave(); assert.equal(save.state.xp, 0);
  delete globalThis.localStorage; delete globalThis.location;
});
