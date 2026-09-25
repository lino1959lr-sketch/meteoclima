const CACHE='meteoclima-v3';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(
  caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('meteoclima-')&&k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  // Never substitute old weather API responses or maps for failed network requests.
  if(e.request.method!=='GET'||url.origin!==self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(r=>{
      if(r.ok){
        const clone=r.clone();
        caches.open(CACHE).then(c=>c.put(e.request,clone)).catch(()=>{});
      }
      return r;
    }).catch(async()=>{
      const cached=await caches.match(e.request);
      if(cached) return cached;
      if(e.request.mode==='navigate'){
        const page=await caches.match('./index.html');
        if(page) return page;
      }
      return Response.error();
    })
  );
});
