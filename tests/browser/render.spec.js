import { test, expect } from '@playwright/test';
import sharp from 'sharp';
test('mobile shaders compile, render colour and resize within the hard pixel budget', async ({ page }) => {
  const errors = [], shaderErrors = [];
  page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error') shaderErrors.push(m.text()); });
  await page.goto('/tests/fixtures/render.html?q=mobile'); await page.waitForFunction(() => window.renderFixture);
  let stats = await page.evaluate(() => ({ size: renderFixture.pipeline.size, q: renderFixture.q.name,
    rt: renderFixture.renderer.info.memory.textures, calls: renderFixture.pipeline.stats.calls }));
  expect(stats.q).toBe('mobile'); expect(stats.calls).toBeGreaterThan(5); expect(stats.rt).toBeLessThan(22);
  expect(stats.size.W * stats.size.H).toBeLessThanOrEqual(1000000);
  const image = await page.screenshot({ path: 'test-results/mobile-pipeline.png', timeout: 60000 });
  const at = await page.evaluate(() => { const p = renderFixture.highlight.position.clone().project(renderFixture.camera); return { x: (p.x+1)/2, y: (1-p.y)/2 }; });
  const { data, info } = await sharp(image).raw().toBuffer({ resolveWithObject: true });
  const i = (Math.round(at.y * info.height) * info.width + Math.round(at.x * info.width)) * info.channels;
  // Overflow must be bright white, not an Inf/Inf -> NaN black centre plus black bloom-cross neighbours.
  expect(data[i]).toBeGreaterThan(190); expect(data[i+1]).toBeGreaterThan(190); expect(data[i+2]).toBeGreaterThan(190);
  await page.setViewportSize({ width: 820, height: 1180 });
  stats = await page.evaluate(() => renderFixture.pipeline.size); expect(stats.W * stats.H).toBeLessThanOrEqual(1000000);
  expect(errors).toEqual([]); expect(shaderErrors).toEqual([]);
});
