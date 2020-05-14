import {LitElement, html} from 'lit-element';

class AppFrame extends LitElement {
    static get properties() {
        return {
            x: {type: Number}
        };
    }

    constructor() {
        super();

        this.x = 0;
    }

    increment () {
        this.x = this.x + 1;
    }

    render() {
        return html `
            <style>
                p {
                    color: teal;
                }
            </style>

            <p>POLYMER: ${this.x}</p>
            <button @click="${this.increment}">+</button>
        `
    }
}

customElements.define('app-frame', AppFrame);