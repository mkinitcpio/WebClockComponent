class WebClock {

    constructor(webClockElement) {
        this._clock = webClockElement;
        this._intervalId = null;
    }

    start() {
        const second = 1000;

        this._intervalId = setInterval(() => {
            let time = new Date();

            this._clock.setAttribute('hours', time.getHours());
            this._clock.setAttribute('minutes', time.getMinutes());
            this._clock.setAttribute('seconds', time.getSeconds());
        }, second);
    }

    stop() {
        clearInterval(this._intervalId);
    }
}