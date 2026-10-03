import {test,expect} from '@playwright/test';
test('single geometry worker replays exact detail/facade/roof buffers via transferable ownership',async({page})=>{
 test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/tests/fixtures/worker.html?q=mobile');await page.waitForFunction(()=>window.workerFixture?.worker.available);
 const result=await page.evaluate(()=>workerFixture.compare());
 expect(result.results.map(r=>r.difference)).toEqual([null,null,null]);expect(result.worker).toMatchObject({completed:3,pending:0,failed:0});expect(errors).toEqual([]);
});

test('classic Blob bootstrap loads the geometry worker from an opaque Data URI',async({page,baseURL})=>{
 test.setTimeout(90000);
 // HTTPS mock avoids Chromium's private-network policy for data: -> http://localhost imports.
 await page.context().route('https://worker-test.example/**',async route=>{
  const url=new URL(route.request().url());const response=await fetch(new URL(url.pathname+url.search,baseURL));
  await route.fulfill({body:Buffer.from(await response.arrayBuffer()),headers:{'content-type':response.headers.get('content-type')||'application/javascript','access-control-allow-origin':'*'}});
 });
 const module='https://worker-test.example/src/world/geometry-worker.js';
 const html=`<script type="module">import {createGeometryWorker} from ${JSON.stringify(module)};window.w=createGeometryWorker();</script>`;
 await page.goto('data:text/html;base64,'+Buffer.from(html).toString('base64'));
 await page.waitForFunction(()=>window.w&&w.stats.state!=='loading',null,{timeout:25000});
 expect(await page.evaluate(()=>({origin:location.origin,...w.stats}))).toMatchObject({origin:'null',state:'ready',failed:0});
});
