const CACHE_NAME = 'dematrix-shop-manager-v3';

// Only manage caching for files that belong to this app. Cross-origin
// libraries (Firebase, Chart.js, SheetJS, jsPDF, docx) are intentionally
// left alone here -- some of them (Firebase's Auth code) load as ES modules,
// which require a proper CORS response to work. A service worker trying to
// pre-cache those with a plain fetch can end up storing an unusable
// "opaque" response and silently breaking login on every later reload,
// even while online. Simpler and safer to let the browser's normal HTTP
// cache handle those.
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (!isSameOrigin) {
    // Cross-origin (Firebase, CDN libraries, etc.) -- don't intercept at all.
    return;
  }

  // Same-origin app files: network-first, falling back to cache when offline.
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        return res;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
