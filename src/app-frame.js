import {LitElement, html} from 'lit-element';

class AppFrame extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();

        console.log(paper)
    }

    render() {
        return html `
            <style>
                p {
                    color: teal;
                }
            </style>

            <p>POLYMER</p>
        `;
    }
}

customElements.define('app-frame', AppFrame);