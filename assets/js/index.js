if ('serviceWorker' in navigator) {
    console.log("Service Worker present");
    navigator.serviceWorker.register("serviceworking.js").then(registration => {
        console.log("Service worker registered");
        console.log(registration);
    })
} else {
    console.log("Unsupported");
}