
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'https://smiteshdas.github.io/pwaTests/FirstSWtest/',
      'https://smiteshdas.github.io/pwaTests/FirstSWtest/index.html',

    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
