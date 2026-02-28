self.addEventListener('install', () => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Basic pass-through fetch handler to satisfy PWA requirements
  e.respondWith(fetch(e.request));
});
