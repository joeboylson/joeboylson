import {LitElement, html} from 'lit-element';

class PageIndex extends LitElement {
    static get properties() {
        return { };
    }

    constructor() {
        super();
    }

    render() {

        return html `
            <style> @import "src/styles/page-index.css"; </style>

            <h1 class="title">I'm Joe</h1>
            <h2>Creative Developer</h2>
        `
    }
}

customElements.define('page-index', PageIndex);