import {LitElement, html} from 'lit-element';

// components
import './page-frame/page-frame'

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
            <page-frame></page-frame>
            <page-frame></page-frame>
            <page-frame></page-frame>
        `;
    }
}

customElements.define('app-frame', AppFrame);