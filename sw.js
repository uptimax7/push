var asset = ['close.png','message.png'];
var cacheName ='site-staic-v1';
self.addEventListener('install', evt=>{
 evt.waitUntil(
  caches.open(cacheName).then(cache=>{
   cache.addAll(asset);
  }
    )
  )});
 
 self.addEventListener('push', evt=>{
var data = evt.data.text();

options = {
    body: 'this is awesome',
    actions:[
        {action:'explore',title:'let get awesome', icon:''},
        {action:'close',title:'get awesome later', icon:''}
    ]
};

evt.waitUntil(
self.registration.showNotification(data, options)
)
});
