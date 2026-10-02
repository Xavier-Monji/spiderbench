import { test, expect } from '@playwright/test';

async function pointer(page, selector, type, pointerId, x, y) {
  await page.locator(selector).dispatchEvent(type, { pointerId, pointerType: 'touch', clientX: x, clientY: y, bubbles: true, cancelable: true });
}
const poll = page => page.evaluate(() => fixture.poll(1 / 30));
test.beforeEach(async ({ page }) => {
  const error = new Promise((_, reject) => page.on('pageerror', reject));
  await Promise.race([(async () => { await page.goto('/tests/fixtures/input.html?touch=1'); await page.waitForFunction(() => window.fixture); })(), error]);
});
test('three simultaneous touches: analog movement, camera drag and held/released swing', async ({ page }) => {
  const r = await page.locator('.touch-stick').boundingBox();
  await pointer(page, '.touch-stick', 'pointerdown', 1, r.x + r.width / 2, r.y + r.height / 2);
  await pointer(page, '.touch-stick', 'pointermove', 1, r.x + r.width / 2 + 30, r.y + r.height / 2 - 30);
  await pointer(page, '[data-action=swing]', 'pointerdown', 2, 1090, 740);
  await pointer(page, 'canvas', 'pointerdown', 3, 600, 400); await pointer(page, 'canvas', 'pointermove', 3, 625, 415);
  let s = await poll(page); expect(s.move.x).toBeGreaterThan(0.4); expect(s.move.y).toBeGreaterThan(0.4);
  expect(s.swing).toBe(true); expect(s.swingPressed).toBe(true); expect(s.look).toEqual({ dx: 25, dy: 15 });
  s = await poll(page); expect(s.swing).toBe(true); expect(s.swingPressed).toBe(false); expect(s.look.dx).toBe(0);
  await pointer(page, '[data-action=swing]', 'pointerup', 2, 1090, 740); s = await poll(page); expect(s.swingReleased).toBe(true);
  expect(await page.evaluate(() => !!document.pointerLockElement)).toBe(false);
});
test('short jump tap is latched, holds charge, and releases on pointer cancel', async ({ page }) => {
  await pointer(page, '[data-action=jump]', 'pointerdown', 4, 1000, 740);
  await pointer(page, '[data-action=jump]', 'pointerup', 4, 1000, 740);
  expect((await poll(page)).jumpPressed).toBe(true); expect((await poll(page)).jumpReleased).toBe(true);
  await pointer(page, '[data-action=jump]', 'pointerdown', 4, 1000, 740); await poll(page);
  expect((await poll(page)).jumpHeld).toBeGreaterThan(0.06);
  await pointer(page, '[data-action=jump]', 'pointercancel', 4, 1000, 740); expect((await poll(page)).jumpReleased).toBe(true);
});
test('blur, resize and menus clear held gestures; menus remain accessible without a keyboard', async ({ page }) => {
  await pointer(page, '[data-action=swing]', 'pointerdown', 5, 1090, 740); await poll(page);
  await page.evaluate(() => dispatchEvent(new Event('blur'))); expect((await poll(page)).swing).toBe(false);
  await pointer(page, '[data-action=use]', 'pointerdown', 6, 1030, 640); expect(await page.evaluate(() => fixture.ctx.interact)).toBe(true);
  await page.getByRole('button', { name: 'Pause and settings' }).tap();
  expect(await page.evaluate(() => fixture.ctx.flow.mode)).toBe('menu'); expect(await page.evaluate(() => fixture.ctx.interact)).toBe(false);
  await expect(page.locator('#touch-controls')).toBeHidden();
});
test('combat buttons share buffered press and charged-attack behavior, not mouse emulation', async ({ page }) => {
  await page.evaluate(() => { fixture.ctx.combat.engaged = true; fixture.ctx.combat.input.enabled = true; fixture.touch.update(); });
  await expect(page.locator('[data-action=drop] b')).toHaveText('DODGE');
  await pointer(page, '[data-action=attack]', 'pointerdown', 7, 1100, 740);
  expect(await page.evaluate(() => fixture.ctx.combat.input.take('attack'))).toBe(true);
  await page.waitForTimeout(250); expect(await page.evaluate(() => fixture.ctx.combat.input.holdNow())).toBe(true);
  expect(await page.evaluate(() => fixture.ctx.combat.input.holdNow())).toBe(false);
  await pointer(page, '[data-action=attack]', 'pointercancel', 7, 1100, 740);
  await pointer(page, '[data-action=drop]', 'pointerdown', 8, 900, 740);
  expect(await page.evaluate(() => fixture.ctx.combat.input.take('dodge'))).toBe(true);
});
test('portrait safe-area layout keeps iPad controls inside the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 820, height: 1180 });
  for (const selector of ['.touch-stick', '[data-action=swing]', '[data-action=jump]', '[data-nav=menu]']) {
    const b = await page.locator(selector).boundingBox(); expect(b.x).toBeGreaterThanOrEqual(0); expect(b.y).toBeGreaterThanOrEqual(0);
    expect(b.x + b.width).toBeLessThanOrEqual(820); expect(b.y + b.height).toBeLessThanOrEqual(1180);
  }
});
