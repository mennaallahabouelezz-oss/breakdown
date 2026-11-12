const C='rt-breakdown-v9',F=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./config.js','./lib/html2canvas.min.js','./lib/jspdf.min.js','./lib/firebase-app-compat.js','./lib/firebase-auth-compat.js','./lib/firebase-firestore-compat.js','./lib/xlsx.core.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 if(new URL(e.request.url).origin!==self.location.origin)return; // never touch Firebase / Google requests
 e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html'))))});
