// iPadOS can identify itself as macOS; UA-only mobile checks miss it.
export function detectDevice({ userAgent = '', platform = '', maxTouchPoints = 0, deviceMemory,
  coarsePointer = false } = {}) {
  const ipad = /iPad/i.test(userAgent) || (/Mac/i.test(platform || userAgent) && maxTouchPoints > 1);
  const mobile = ipad || /Android|iPhone|iPod|Mobile/i.test(userAgent) || (coarsePointer && maxTouchPoints > 0);
  return { ipad, mobile, touch: maxTouchPoints > 0 || coarsePointer,
    constrained: mobile || (Number.isFinite(deviceMemory) && deviceMemory <= 4) };
}

export function getDevice() {
  const n = globalThis.navigator ?? {};
  return detectDevice({ userAgent: n.userAgent, platform: n.platform, maxTouchPoints: n.maxTouchPoints,
    deviceMemory: n.deviceMemory, coarsePointer: globalThis.matchMedia?.('(pointer: coarse)').matches ?? false });
}

export function shouldShowTouch(search = globalThis.location?.search ?? '', device = getDevice()) {
  const option = new URLSearchParams(search).get('touch');
  return option === '1' || (option !== '0' && device.touch);
}
