const applicationServerKey = "BDyX-iwBIIJwegnSZb791AsrVJOzRA--Pr-3iwTQQ7Ztq_JPv-Xr0hbapz-yQF1iBRqEyqiL-xXnkd2yEthQzZs"
function checkBrowser(){
    return (('serviceWorker' in navigator) && ('PushManager' in window))
}
function registerServiceWorker(){
    return navigator.serviceWorker.register('js/serviceWorker.js')
        .then(function (registration){
                    let options = {
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array(applicationServerKey)
                    };
                    registration.pushManager.subscribe(options).then(
                        function(pushSubscription) {
                            console.log(pushSubscription.endpoint);
                            // The push subscription details needed by the application
                            // server are now available, and can be sent to it using,
                            // for example, an XMLHttpRequest.
                        }, function(error) {
                            // During development it often helps to log errors to the
                            // console. In a production environment it might make sense to
                            // also report information about errors back to the
                            // application server.
                            console.log(error);
                        });
            console.log('Service worker successfully registered')
            return registration;
        })
        .catch(function (e){
            console.log('Unable to register sw '+e);
        })
}

/**
 * Conversion de la clef VAPID pour la subscription
 * @param base64String
 * @returns {Uint8Array}
 */
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}