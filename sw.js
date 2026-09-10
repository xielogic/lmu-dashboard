const CACHE_NAME = "lmu-dashboard-v12-2026-09-10";
const APP_SHELL = [
  "./",
  "./index.html",
  "./app.css",
  "./app.js",
  "./manifest.webmanifest?v=12",
  "./assets/icons/Logo_LMU.svg",
  "./assets/icons/lmu-app-icon-v11.svg",
  "./assets/icons/lmu-favicon-v11.svg",
  "./assets/icons/lmu-favicon-16-v11.png",
  "./assets/icons/lmu-favicon-32-v11.png",
  "./assets/icons/favicon.ico",
  "./assets/icons/lmu-icon-192-v11.png",
  "./assets/icons/lmu-icon-512-v11.png",
  "./assets/icons/lmu-maskable-512-v11.png",
  "./assets/icons/lmu-apple-touch-icon-v11.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  if (!requestUrl.href.startsWith(self.registration.scope)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
