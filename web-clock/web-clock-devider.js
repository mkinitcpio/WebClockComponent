class WebClockDeviderComponent extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.innerHTML = `
        <style>
            :host{
                display: flex;
                align-items: center;
                font-size: 36px;
                color: #F6C6BC;
            }
        </style>
        <div>:</div>
        `;
    }
}