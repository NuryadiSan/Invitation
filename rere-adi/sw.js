self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        './',
        'index.html',

        'css/bootstrap.min.css',
        'css/font.css',
        'css/font.woff2',
        'css/ionicons.min.css',
        'css/justifiedGallery.min.css',
        'css/magnific-popup.css',
        'css/main.css',
        'css/owl.carousel.min.css',
        'css/owl.theme.default.min.css',
          
        'app.js',
        'js/bootstrap.min.js',
        'js/html5shiv.min.js',
        'js/jquery.justifiedGallery.min.js',
        'js/jquery.localScroll.min.js',
        'js/jquery.magnific-popup.min.js',
        'js/jquery.min.js',
        'js/jquery.scrollTo.min.js',
        'js/main.js',
        'js/owl.carousel.min.js',
        'js/popper.min.js',
        'js/respond.min.js',
        
        'img/aik/banner-img.jpg',
        'img/aik/banner.jpg',
        'img/aik/gallery2.jpg',
        'img/aik/gallery3.jpg',
        'img/aik/gallery4.jpg',
        'img/aik/gallery5.jpg',
        'img/aik/gallery6.jpg',
        'img/aik/gallery7.jpg',

        'img/elipse.svg',
        'img/flower-bw.png',
        'img/flower.png',
        'img/flower2.svg',
        'img/rectangle.svg',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match(event.request);
      });
    }
    
  }));
});