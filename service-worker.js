// A simple service worker for caching assets and enabling PWA functionality.

const CACHE_NAME = 'ift-brics-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834228/IFT_Logo_Horizontal_nfytm4.png',
  'https://res.cloudinary.com/dsdzoebyq/image/upload/v1758834228/IFT_Logo_Color_jg4a6o.png'
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
