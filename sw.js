const CACHE_NAME = 'teclado-virtual-jea-pro-v5';
const APP_SHELL = [
  './', './index.html', './manifest.webmanifest', './sw.js',
  './apple-touch-icon.png', './favicon-32x32.png', './favicon-16x16.png',
  './android-chrome-192x192.png', './android-chrome-512x512.png', './maskable-512x512.png'
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL).catch(() => cache.addAll(['./','./index.html','./manifest.webmanifest','./sw.js']))));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
