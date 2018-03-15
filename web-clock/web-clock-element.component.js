class WebClockElementComponent extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                :host {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    height: 80px;
                    width: 80px;
                    background: white;
                    border: 1px solid white;
                    border-radius: 8px;
                    box-shadow: 0px 27px 64px -2px rgba(255, 211, 203, 1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 36px;
                    color: #7F7989;
                }
            </style>
            <value></value>
            `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('value').textContent = newValue < 10 ? `0${newValue}` : newValue;
    }

    static get observedAttributes() {
        return ['value'];
    }
}