import workerUrl from './stream-worker.js?worker&url';

// Classic Blob bootstrap + dynamic import: module Blob workers fail on opaque Data-URI origins in Chromium.
// One job only. Retained recipes stay on the main thread; only one bounded compressed packet is copied,
// and finished vertex/index buffers return by ownership transfer. Late/cancelled results are discarded.
export function createGeometryWorker({ readyTimeout = 15000, jobTimeout = 30000 } = {}) {
  let worker, current = null, serial = 0, timer, bootstrap;
  const counts = { started: 0, completed: 0, cancelled: 0, failed: 0 };
  let state = 'loading', lastError = null;
  const fail = message => {
    clearTimeout(timer); if (bootstrap) { URL.revokeObjectURL(bootstrap); bootstrap = null; } state = 'disabled'; lastError = message; counts.failed++;
    worker?.terminate(); if (current) { current.reject(Error(message)); current = null; }
  };
  try {
    const entry = new URL(workerUrl, import.meta.url).href;
    bootstrap = URL.createObjectURL(new Blob([`self.__spiderbenchWorkerModuleUrl=${JSON.stringify(entry)};import(${JSON.stringify(entry)}).catch(e=>{try{importScripts(${JSON.stringify(entry)});}catch(f){self.postMessage({type:'init-error',message:String(f.message||e.message)});}});`], { type: 'text/javascript' }));
    worker = new Worker(bootstrap, { name: 'Spiderbench geometry' });
    timer = setTimeout(() => fail('Geometry worker initialization timed out'), readyTimeout);
    worker.onerror = e => { e.preventDefault(); fail(e.message || 'Geometry worker failed'); };
    worker.onmessage = ({ data }) => {
      if (data.type === 'ready') { clearTimeout(timer); URL.revokeObjectURL(bootstrap); bootstrap = null; state = 'ready'; return; }
      if (data.type === 'init-error') { fail(data.message); return; }
      if (!current || data.id !== current.id) return;
      clearTimeout(timer); const job = current; current = null; state = 'ready';
      if (data.type === 'error') { fail(data.message); job.reject(Error(data.message)); return; }
      counts.completed++; job.resolve(data.geometry);
    };
  } catch (e) { fail(String(e.message)); }
  return {
    get available() { return state === 'ready' && !current; },
    get busy() { return !!current; },
    submit(recipe, options) {
      if (state !== 'ready' || current) return null;
      const id = ++serial;
      const promise = new Promise((resolve, reject) => { current = { id, resolve, reject, cancelled: false }; });
      state = 'busy'; counts.started++; timer = setTimeout(() => fail('Geometry worker build timed out'), jobTimeout);
      try { worker.postMessage({ type: 'build', id, recipe, options }); } catch (e) { fail(String(e.message)); }
      return { id, promise };
    },
    cancel(id) { if (current?.id === id && !current.cancelled) { current.cancelled = true; counts.cancelled++; } },
    get stats() { return { state, ...counts, pending: current ? 1 : 0, error: lastError }; },
    dispose() { fail('Geometry worker disposed'); },
  };
}
