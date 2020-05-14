import {LitElement, html} from 'lit-element';

class Page extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    render() {
        return html `
            <style>
                p {
                    color: teal;
                }
            </style>

            <p>this is a page frame</p>
        `;
    }
}

customElements.define('page-frame', Page);