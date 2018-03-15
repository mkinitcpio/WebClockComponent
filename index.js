window.customElements.define('web-clock', WebClockComponent);
window.customElements.define('web-clock-element', WebClockElementComponent);
window.customElements.define('web-clock-devider', WebClockDeviderComponent);

const webClockElement = document.querySelector('web-clock');
const webClock = new WebClock(webClockElement);

function startClock() {
    webClock.start();
}

function stopClock() {
    webClock.stop();
}

window.addEventListener('load',startClock);