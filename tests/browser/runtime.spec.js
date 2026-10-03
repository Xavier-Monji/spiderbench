import { test, expect } from '@playwright/test';

test('cached active traffic links preserve cars, routes, reactions and camera streaming exactly', async ({ page }) => {
  test.setTimeout(90000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/tests/fixtures/runtime.html?q=mobile');await page.waitForFunction(()=>window.runtimeFixture);
  const result=await page.evaluate(()=>compareTraffic());
  expect(result).toMatchObject({equal:true,frames:180});expect(result.stats.cars).toBeGreaterThan(0);expect(errors).toEqual([]);
});
test('indexed crowd preserves simulation and rendered instance matrices including alarms, danger and revisits', async ({ page }) => {
  test.setTimeout(120000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/tests/fixtures/runtime.html?q=mobile');await page.waitForFunction(()=>window.runtimeFixture);
  const result=await page.evaluate(()=>compareCrowd());
  expect(result).toMatchObject({equal:true,frames:90});expect(result.statics).toBeGreaterThan(1000);expect(errors).toEqual([]);
});
