class WebClockComponent extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML =
            `<style>
                :host {
                    display: flex;
                    width: 280px;
                    justify-content: space-around;
                    margin: 0;
                }
            </style>
            <web-clock-element type='hours' value='0'>
            </web-clock-element>
            <web-clock-devider type='minutes-devider'></web-clock-devider>
            <web-clock-element type='minutes' value='0'>
            </web-clock-element>
            <web-clock-devider type='seconds-devider'></web-clock-devider>
            <web-clock-element type='seconds' value='0'>
            </web-clock-element>
            `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.needToUpdateTime(oldValue, newValue)) {
            let elementsDevider = this.shadowRoot.querySelector(`[type='${name}-devider']`);
            this.animateDevider(elementsDevider);

            let clockElement = this.shadowRoot.querySelector(`[type=${name}]`);
            clockElement.setAttribute('value', newValue);
            this.animateClockElement(clockElement);
        }
    }

    needToUpdateTime(previous, current) {
        return previous !== current;
    }

    animateClockElement(clockElement) {
        clockElement.animate([
            { transform: 'translate(0)' },
            { transform: 'translate(0px, 8px)' },
            { transform: 'translate(0px, 0px)' }
        ], 600);
    }
    animateDevider(devider) {
        devider && devider.animate([
            { opacity: 1 },
            { opacity: 0.5 },
            { opacity: 1 }
        ], 800);
    }

    static get observedAttributes() {
        return ['hours', 'minutes', 'seconds'];
    }
}