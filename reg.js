
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('ssw.js')
  .then(function(registration) {
    registration.addEventListener('updatefound', function() {
      var installingWorker = registration.installing;
      console.log('Sw working:',
        installingWorker);
    });
  })
  .catch(function(eror) {
    console.log('Sw failed:', eror);
  });
} else {
  console.log('Sw is supported.');
}

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/ssw.js')
//   .then(function(registration) {
//     console.log('Registration successful, scope is:', registration.scope);
//   })
//   .catch(function(error) {
//     console.log('Service worker registration failed, error:', error);
//   });
// }