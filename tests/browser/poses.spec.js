import {test,expect} from '@playwright/test';
test('GPU cached crowd bone poses preserve detailed characters and their shadows',async({page})=>{
 test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 await page.goto('/tests/fixtures/poses.html?q=mobile');await page.waitForFunction(()=>window.poseFixture);
 const result=await page.evaluate(()=>poseFixture.result);
 expect(result.people).toBeGreaterThan(0);expect(result.meanDifference).toBeLessThan(.03);expect(result.different/result.components).toBeLessThan(.01);expect(errors).toEqual([]);
 const reused=await page.evaluate(()=>{poseFixture.atlas.prepare();return poseFixture.atlas.stats});expect(reused.reusedFrames).toBe(1);
});

test('GPU pose reset reuses original clip input instead of treating cached row ids as clips',async({page})=>{
 test.setTimeout(90000);await page.goto('/tests/fixtures/poses.html?q=mobile');await page.waitForFunction(()=>window.poseFixture);
 const result=await page.evaluate(()=>{
  const F=poseFixture,gl=F.renderer.getContext(),read=()=>{F.renderer.setRenderTarget(null);F.renderer.render(F.scene,F.camera);const a=new Uint8Array(400*300*4);gl.readPixels(0,0,400,300,gl.RGBA,gl.UNSIGNED_BYTE,a);return a};
  const a=read();F.atlas.reset();F.atlas.prepare();const b=read();let d=0;for(let i=0;i<a.length;i++)if(a[i]!==b[i])d++;return d;
 });expect(result).toBe(0);
});
