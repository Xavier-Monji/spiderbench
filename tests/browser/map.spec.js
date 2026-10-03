import {test,expect} from '@playwright/test';

test('map caches preserve pixels and invalidate on unlock, route, hover, pan and resize',async({page})=>{
  test.setTimeout(90000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/tests/fixtures/map.html?q=mobile');await page.waitForFunction(()=>window.mapFixture);
  const result=await page.evaluate(async()=>{
    const {sys,createMapPage,mount,pixels}=fixture,rnd=Math.random;Math.random=()=>.42;
    history.replaceState(null,'',location.pathname+'?q=mobile&noruntimecache');const reference=createMapPage(sys);
    history.replaceState(null,'',location.pathname+'?q=mobile');const cached=createMapPage(sys);Math.random=rnd;
    await document.fonts.ready;mount(reference);reference.update(0);mount(cached);cached.update(0);await new Promise(r=>setTimeout(r,200));
    const checks=[];
    const compare=label=>{mount(reference);const a=pixels(reference);mount(cached);const b=pixels(cached);let n=0;for(let i=0;i<a.length;i++)if(a[i]!==b[i])n++;checks.push({label,different:n});};
    compare('locked');sys.save.state.towers.push('tower_test');compare('unlocked');
    sys.travel.route=[[0,0],[100,0],[100,200]];compare('GPS route');
    // A stationary map must not redo icon relaxation/label search, but its animation still runs.
    mount(cached);cached.update(0);const before=cached.stats;for(let i=0;i<12;i++)cached.update(1/30);const after=cached.stats;
    window.cachedMap=cached;
    return {checks,before,after};
  });
  expect(result.checks.every(c=>c.different===0),JSON.stringify(result.checks)).toBe(true);
  expect(result.after.icons.builds).toBe(result.before.icons.builds);expect(result.after.labels.builds).toBe(result.before.labels.builds);
  const canvas=page.locator('.sys-map canvas');await canvas.hover();await page.mouse.wheel(0,-180);
  const zoom=await page.evaluate(()=>{cachedMap.update(0);return cachedMap.stats;});expect(zoom.icons.builds).toBeGreaterThan(result.after.icons.builds);
  await page.setViewportSize({width:820,height:1180});
  const resized=await page.evaluate(()=>{cachedMap.update(0);return {stats:cachedMap.stats,width:cachedMap.el.querySelector('canvas').width};});
  expect(resized.width).toBe(1640);expect(resized.stats.icons.builds).toBeGreaterThan(zoom.icons.builds);expect(errors).toEqual([]);
});
