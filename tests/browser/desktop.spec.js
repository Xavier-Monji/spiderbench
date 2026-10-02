import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.goto('/tests/fixtures/input.html?touch=0&q=low'); await page.waitForFunction(() => window.fixture);
});
test('desktop keyboard and right-mouse swing remain independent of the virtual pad', async ({ page }) => {
  expect(await page.locator('#touch-controls').count()).toBe(0);
  await page.keyboard.down('w'); await page.keyboard.down('d'); await page.keyboard.down('Space');
  await page.mouse.move(500, 400); await page.mouse.down({ button: 'right' });
  let s = await page.evaluate(() => fixture.poll(1/60));
  expect(s.move.x).toBeCloseTo(Math.SQRT1_2); expect(s.move.y).toBeCloseTo(Math.SQRT1_2);
  expect(s.swingPressed).toBe(true); expect(s.jumpPressed).toBe(true); expect(s.usingTouch).toBe(false);
  await page.keyboard.up('w'); await page.keyboard.up('d'); await page.keyboard.up('Space'); await page.mouse.up({ button: 'right' });
  s = await page.evaluate(() => fixture.poll(1/60)); expect(s.swingReleased).toBe(true); expect(s.jumpReleased).toBe(true);
});
test('standard gamepad analog, camera, jump, R2 swing and L2+R2 zip keep the original mappings', async ({ page }) => {
  await page.evaluate(() => { window.pad = { mapping: 'standard', axes: [.7,-.8,.6,-.4], buttons: Array.from({ length: 16 }, () => ({ pressed: false, value: 0 })) };
    pad.buttons[0].pressed = true; pad.buttons[7].value = 1;
    Object.defineProperty(navigator, 'getGamepads', { configurable: true, value: () => [pad] }); });
  let s = await page.evaluate(() => fixture.poll(1/60)); expect(s.usingPad).toBe(true); expect(s.usingTouch).toBe(false);
  expect(s.move.x).toBeGreaterThan(.4); expect(s.move.y).toBeGreaterThan(.7); expect(s.look.dx).toBeGreaterThan(5);
  expect(s.jump).toBe(true); expect(s.swing).toBe(true); expect(s.zip).toBe(false);
  s = await page.evaluate(() => { pad.buttons[6].value = 1; return fixture.poll(1/60); });
  expect(s.zipPressed).toBe(true); expect(s.swing).toBe(false);
});
