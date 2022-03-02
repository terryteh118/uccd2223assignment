const cacheName = 'cache-v1';
const precacheResources = [
    '/',
    'index.html',
    'about.html',
    'menu.html',
    'reservations.html',
    'contact.html',
    'orderOnline.html',
    'css/style.css',
    'css/bootstrap.min.css',
    'js/bootstrap.bundle.min.js',
    'images/BackgroundAll.jpg',
    'images/BackgroundIndex.jpg',
    'images/About1.jpg',
    'images/About2.jpg',
    'images/About3.jpg',
    'images/About4.jpg',
    'images/Chef1.jpg',
    'images/Chef2.jpg',
    'images/Starters.jpg',
    'images/MainCourses.jpg',
    'images/SoupOfTheDay.jpg',
    'images/OrganicSalad.jpg',
    'images/RosemaryChicken.jpg',
    'images/Burger.jpg',
    'icons/VeganIcon.png',
    'icons/StarIcon.png',
    'images/Reservations1.jpg',
    'images/Reservations2.jpg',
    'images/Contact1.jpg'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});
