function checkBrowser(){
    return (('serviceWorker' in navigator) && ('PushManager' in window))
}
function registerServiceWorker(){
    return navigator.serviceWorker.register('js/serviceWorker.js')
        .then(function (registration){
            console.log('Service worker successfully registered')
            return registration;
        })
        .catch(function (e){
            console.log('Unable to register sw '+e);
        })
}