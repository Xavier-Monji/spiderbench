// A single CPU worker. Classic Blob bootstrap loads the pinned CDN bundle from an opaque Data URI.
// Force the SAME builder profile before evaluating modules; workers have no touch/deviceMemory metadata.
globalThis.__spiderbenchQuality = 'mobile';
const builders = Promise.all([import('./geom.js'), import('./facade.js'), import('./rooftops.js'),
  import('./recipe-codec.js'), import('../render/geometry-budget.js'), import('./geometry-transfer.js')]);
builders.then(() => self.postMessage({ type: 'ready' })).catch(e => self.postMessage({ type: 'init-error', message: String(e.message) }));
self.onmessage = async ({ data }) => {
  if (data.type !== 'build') return;
  try {
    const [mb, fac, roof, codec, compact, transfer] = await builders;
    if (data.recipe.version !== 1) throw Error('Unsupported recipe codec');
    const Builder = { MB: mb.MB, FacadeBuilder: fac.FacadeBuilder, RB: roof.RB }[data.recipe.builder];
    if (!Builder) throw Error('Unknown geometry builder');
    const steps = codec.expandPacket(Builder, data.recipe, data.options); let step;
    do { step = steps.next(); } while (!step.done);
    const geometry = step.value; if (geometry) compact.compactGeometry(geometry);
    const packet = transfer.packGeometry(geometry);
    self.postMessage({ type: 'result', id: data.id, geometry: packet }, transfer.geometryTransferables(packet));
  } catch (e) { self.postMessage({ type: 'error', id: data.id, message: String(e.message) }); }
};
