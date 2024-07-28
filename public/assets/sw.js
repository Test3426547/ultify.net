// public/sw.js
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
      caches.open('static-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          // Add other assets that you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== 'static-v1') {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('push', (event) => {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: 'path/to/icon.png',
      badge: 'path/to/badge.png'
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  });
  
  self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-tag') {
      event.waitUntil(
        // Perform sync tasks
      );
    }
  });  