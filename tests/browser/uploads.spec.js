import {test,expect} from '@playwright/test';
test('bounded COPY_WRITE streamed uploads preserve pixels and release every VBO on eviction',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 await page.goto('/tests/fixtures/uploads.html');await page.waitForFunction(()=>window.uploadFixture);
 const r=await page.evaluate(()=>uploadFixture);
 expect(r.different).toBe(0);expect(r.freshDifference).toBe(0);expect(r.freshError).toBe(0);expect(r.renderError).toBe(0);expect(r.uploadErrors).toEqual([]);expect(r.frames).toBeGreaterThan(4);expect(r.frames).toBeLessThan(200);
 expect(r.stats.maxFrameBytes).toBeLessThanOrEqual(128);expect(r.released).toBe(true);expect(r.error).toBe(0);expect(errors).toEqual([]);
});
