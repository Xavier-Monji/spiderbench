import { shouldShowTouch } from '../platform/device.js';
import './touch-controls.css';

// Pointer capture and per-pointer ownership allow stick + camera + held swing/jump simultaneously.
// Gameplay is routed into the input/interaction/combat APIs, never fake mouse events or pointer lock.
export function createTouchControls(ctx) {
  if (!shouldShowTouch()) return null;
  const input = ctx.input;
  input.touch.enabled = true;
  document.body.classList.add('touch-enabled');
  const root = document.createElement('div'); root.id = 'touch-controls'; root.dataset.touchUi = '';
  root.setAttribute('aria-label', 'Touch controls');
  root.innerHTML = `<div class="touch-toolbar">
    <span class="touch-hint">LEFT PAD · MOVE　 /　 DRAG CITY · LOOK</span>
    <button data-nav="perf" aria-label="Toggle performance diagnostics">FPS</button>
    <button data-nav="help" aria-label="Touch controls help">?</button>
    <button data-nav="map" aria-label="Open map">MAP</button>
    <button data-nav="menu" aria-label="Pause and settings">MENU</button>
    <button data-nav="fullscreen" aria-label="Toggle fullscreen">⛶</button>
  </div>
  <div class="touch-gameplay">
    <div class="touch-stick" role="group" aria-label="Movement pad"><span class="touch-stick-cross"></span><span class="touch-stick-knob"></span><span class="touch-stick-label">MOVE</span></div>
    <div class="touch-actions">
      <div class="touch-secondary">
        <button data-action="boost" aria-label="Quick web boost or combat finisher"><b>BOOST</b></button>
        <button data-action="zip" aria-label="Web zip or combat web strike"><b>ZIP</b></button>
        <button data-action="use" aria-label="Hold to interact, or shoot a web in combat"><b>USE</b></button>
        <button data-nav="more" aria-label="More actions" aria-expanded="false">•••</button>
      </div>
      <div class="touch-primary">
        <button data-action="drop" aria-label="Dive, drop, or dodge in combat"><b>DIVE</b></button>
        <button data-action="jump" aria-label="Jump; hold to charge"><b>JUMP</b><small>HOLD</small></button>
        <button data-action="swing" aria-label="Hold to swing; release to let go"><b>SWING</b><small>HOLD</small></button>
        <button data-action="attack" aria-label="Attack; hold for launcher" hidden><b>ATTACK</b><small>HOLD</small></button>
      </div>
      <div class="touch-extra" hidden>
        <button data-action="run" aria-label="Hold for parkour or wall run">RUN</button>
        <button data-action="rope" aria-label="Web tightrope when perched">ROPE</button>
        <button data-action="throw" aria-label="Throw in combat">THROW</button>
        <button data-action="heal" aria-label="Heal in combat">HEAL</button>
      </div>
    </div>
  </div>
  <div class="touch-help" hidden><b>TOUCH CONTROLS</b><p>Left pad: move. Drag anywhere on the city: look.</p><p>Hold SWING to attach a web; release to let go. Hold JUMP for a charged jump. ZIP moves to the reticle. DIVE drops from a wall or perch. USE is held for interactions.</p><p>During combat: ATTACK (hold = launcher), DODGE, WEB, STRIKE and FINISH. More actions: wall-run, tightrope, throw, heal.</p><p>Landscape is recommended. MAP and MENU open the touch-accessible menus.</p><button data-nav="help-close">GOT IT</button></div>`;
  document.body.appendChild(root);
  const stick = root.querySelector('.touch-stick'), knob = root.querySelector('.touch-stick-knob');
  const owners = new Map(), codeCounts = new Map();
  let joyId = null, joyCenter, lookId = null, lastLook, mode = 'play', combat = false;
  let unsubscribe;
  const listen = (el, name, fn) => el.addEventListener(name, fn, { passive: false });
  const capture = (el, id) => { try { el.setPointerCapture?.(id); } catch { /* old browsers / synthetic test events */ } };
  const playing = () => (ctx.flow?.mode ?? 'play') === 'play' && !document.hidden;
  function holdCodes(codes) {
    for (const code of codes) { const n = codeCounts.get(code) ?? 0; if (!n) input.touch.press(code); codeCounts.set(code, n + 1); }
    return () => { for (const code of codes) { const n = (codeCounts.get(code) ?? 1) - 1;
      if (n <= 0) { codeCounts.delete(code); input.touch.release(code); } else codeCounts.set(code, n); } };
  }
  function beginAction(action) {
    const ci = ctx.combat?.input;
    const fight = !!ctx.combat?.engaged;
    const mapped = { attack: 'attack', throw: 'throw', heal: 'heal', drop: 'dodge', use: 'web', zip: 'strike', boost: 'finisher' }[action];
    if (fight && mapped && ci) { ci.pressAction(mapped); return () => ci.releaseAction(mapped); }
    if (['attack', 'throw', 'heal'].includes(action)) return () => {};
    if (action === 'use') { ctx.sys?.setInteractHeld?.(true); return () => ctx.sys?.setInteractHeld?.(false); }
    return holdCodes({ swing: ['MouseRight'], jump: ['Space'], zip: ['KeyE'], drop: ['KeyC'], boost: ['KeyQ'],
      rope: ['KeyT'], run: ['ShiftLeft'] }[action] ?? []);
  }
  function endButton(e) {
    const owner = owners.get(e.pointerId); if (!owner) return;
    owners.delete(e.pointerId); owner.release();
    if (![...owners.values()].some(o => o.el === owner.el)) owner.el.classList.remove('held');
  }
  for (const button of root.querySelectorAll('[data-action]')) {
    listen(button, 'pointerdown', e => {
      e.preventDefault(); e.stopPropagation(); if (!playing() || owners.has(e.pointerId)) return;
      capture(button, e.pointerId); button.classList.add('held');
      owners.set(e.pointerId, { el: button, release: beginAction(button.dataset.action) });
    });
    for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) listen(button, event, endButton);
    button.addEventListener('click', e => { if (!e.detail && playing()) { const release = beginAction(button.dataset.action); release(); } });
  }
  function moveStick(e) {
    if (e.pointerId !== joyId) return;
    const dx = e.clientX - joyCenter.x, dy = e.clientY - joyCenter.y, distance = Math.hypot(dx, dy);
    const magnitude = Math.min(1, Math.max(0, (distance / joyCenter.radius - 0.12) / 0.88));
    input.touch.setMove(distance ? dx / distance * magnitude : 0, distance ? -dy / distance * magnitude : 0);
    const reach = Math.min(distance, joyCenter.radius);
    knob.style.transform = `translate(${distance ? dx / distance * reach : 0}px,${distance ? dy / distance * reach : 0}px)`;
  }
  listen(stick, 'pointerdown', e => {
    e.preventDefault(); e.stopPropagation(); if (!playing() || joyId !== null) return;
    const r = stick.getBoundingClientRect(); joyCenter = { x: r.x + r.width / 2, y: r.y + r.height / 2, radius: r.width * 0.32 };
    joyId = e.pointerId; capture(stick, joyId); stick.classList.add('held'); moveStick(e);
  });
  listen(stick, 'pointermove', e => { e.preventDefault(); moveStick(e); });
  const endStick = e => { if (e.pointerId !== joyId) return; joyId = null; input.touch.setMove(0, 0); knob.style.transform = ''; stick.classList.remove('held'); };
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) listen(stick, event, endStick);
  const canvas = ctx.renderer.domElement;
  const startLook = e => {
    if (e.pointerType !== 'touch' && e.pointerType !== 'pen') return;
    e.preventDefault(); if (!playing() || lookId !== null) return;
    lookId = e.pointerId; lastLook = { x: e.clientX, y: e.clientY }; capture(canvas, lookId);
  };
  const moveLook = e => { if (e.pointerId !== lookId || !playing()) return; e.preventDefault();
    input.touch.addLook(e.clientX - lastLook.x, e.clientY - lastLook.y); lastLook = { x: e.clientX, y: e.clientY }; };
  const endLook = e => { if (e.pointerId === lookId) lookId = null; };
  listen(canvas, 'pointerdown', startLook); listen(canvas, 'pointermove', moveLook);
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) listen(canvas, event, endLook);
  function clear() {
    for (const owner of owners.values()) owner.release(); owners.clear(); codeCounts.clear();
    joyId = lookId = null; input.touch.clear(); ctx.sys?.setInteractHeld?.(false);
    knob.style.transform = ''; root.querySelectorAll('.held').forEach(el => el.classList.remove('held'));
  }
  async function navigate(name) {
    if (name === 'perf') { clear(); ctx.diagnostics?.toggle(); return; }
    if (name === 'help' || name === 'help-close') { const help = root.querySelector('.touch-help'); help.hidden = name === 'help-close' || !help.hidden; clear(); return; }
    if (name === 'more') { const extra = root.querySelector('.touch-extra'); extra.hidden = !extra.hidden;
      root.querySelector('[data-nav="more"]').setAttribute('aria-expanded', String(!extra.hidden)); return; }
    clear();
    if (name === 'menu') ctx.sys?.pause?.show();
    if (name === 'map') ctx.sys?.pause?.show('map');
    if (name === 'fullscreen') { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen?.(); } catch { /* iOS can deny fullscreen; controls still work */ } }
  }
  for (const button of root.querySelectorAll('[data-nav]')) {
    listen(button, 'pointerdown', e => { e.preventDefault(); e.stopPropagation(); navigate(button.dataset.nav); });
    button.addEventListener('click', e => { if (!e.detail) navigate(button.dataset.nav); });
  }
  if (!document.documentElement.requestFullscreen) root.querySelector('[data-nav="fullscreen"]').hidden = true;
  const visibility = () => { if (document.hidden) clear(); };
  function endPointer(e) { endButton(e); endStick(e); endLook(e); }
  addEventListener('pointerup', endPointer); addEventListener('pointercancel', endPointer);
  addEventListener('blur', clear); addEventListener('resize', clear); document.addEventListener('visibilitychange', visibility);
  function update() {
    const nextMode = ctx.flow?.mode ?? 'play', nextCombat = !!ctx.combat?.engaged;
    if (nextMode !== mode || nextCombat !== combat) { clear(); mode = nextMode; combat = nextCombat; }
    root.classList.toggle('in-overlay', mode !== 'play');
    for (const [action, normal, fight] of [['drop', 'DIVE', 'DODGE'], ['zip', 'ZIP', 'STRIKE'], ['use', 'USE', 'WEB'], ['boost', 'BOOST', 'FINISH']]) {
      const label = root.querySelector(`[data-action="${action}"] b`), text = combat ? fight : normal;
      if (label.textContent !== text) label.textContent = text;
    }
    root.querySelector('[data-action="attack"]').hidden = !combat;
    if (!unsubscribe && ctx.events?.on) unsubscribe = ctx.events.on('flow:mode', () => { clear(); update(); });
  }
  update();
  return { root, clear, update, dispose() {
    clear(); unsubscribe?.(); root.remove(); input.touch.enabled = false; document.body.classList.remove('touch-enabled');
    removeEventListener('pointerup', endPointer); removeEventListener('pointercancel', endPointer); removeEventListener('blur', clear); removeEventListener('resize', clear); document.removeEventListener('visibilitychange', visibility);
    canvas.removeEventListener('pointerdown', startLook); canvas.removeEventListener('pointermove', moveLook);
    for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) canvas.removeEventListener(event, endLook);
  } };
}
