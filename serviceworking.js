self.addEventListener("install", e => {
    // console.log("Installing");
    e.waitUntil(
        caches.open("statics-fe").then(cache => {
            return cache.addAll(["./", "./assets/css/styles.css", "./assets/css/bootstrap.css", "./assets/js/bootstrap.js", "./assets/image/IMG-20210803-WA0139-144.png"]);
        })
    );
});
// 
//  "./assets/js/ndex.js", "./assets/js/bootstrap.js" ,
// , "./assets/image/IMG-20210803-WA0139-192.png", "./assets/image/IMG-20210803-WA0139-512.png
self.addEventListener("fetch", e => {
    // console.log('Intercepting request for: ${e.request.url}');
    // console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    )
});
// `¬!"£`"£$%$%^&*()_+=-   QWERTYUIOOOOOP{[]]]}#~;:'@/?.>,<