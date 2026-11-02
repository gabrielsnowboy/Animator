// Offline support: keeps a copy of Animator so it opens without a connection.
const CACHE = 'animator-1de45735e7';
const FILES = ["./", "fonts/bricolage-grotesque-latin-600-normal.woff2", "fonts/bricolage-grotesque-latin-800-normal.woff2", "fonts/figtree-latin-400-normal.woff2", "fonts/figtree-latin-500-normal.woff2", "fonts/figtree-latin-600-normal.woff2", "fonts/fonts.css", "fonts/jetbrains-mono-latin-500-normal.woff2", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-32.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "index.html", "manifest.webmanifest", "vendor/mp4-muxer.js", "vendor/mpg123-decoder.min.js"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('animator-') && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
