import {LitElement, html} from 'lit-element';
import Router from './utils/router';

class AppFrame extends LitElement {
    static get properties() {
        return {
            currentPage: {type: Object},
            nextPages: {type: Object}
        };
    }

    constructor() {
        super();
        this.currentPage = null;
        this.nextPages = null;

        PubSub.subscribe('ROUTE_TO', (_, data) => this.setPage(data));
    }

    firstUpdated() {
        this.currentPage = Router.findPage(Router.x, Router.y);
        this.nextPages = this.currentPage.getNextPages();
    }

    setPage (page) {
        this.currentPage = page
        this.nextPages = this.currentPage.getNextPages();
    }

    render() {

        return html `
            <style>
                @import "https://cdn.lineicons.com/2.0/LineIcons.css";

                p {
                    color: teal;
                }
            </style>

            <p>POLYMER: X: ${Router.x} | Y: ${Router.y}</p>

            ${this.currentPage ? this.currentPage.component : ""}

            ${this.nextPages ? html`
                <div>
                    ${this.nextPages.top ? html`<button @click="${() => Router.routeTo(this.nextPages.top.x, this.nextPages.top.y)}">UP: ${this.nextPages.top.name}</button>` : null}
                    ${this.nextPages.right ? html`<button @click="${() => Router.routeTo(this.nextPages.right.x, this.nextPages.right.y)}">RIGHT: ${this.nextPages.right.name}</button>` : null}
                    ${this.nextPages.bottom ? html`<button @click="${() => Router.routeTo(this.nextPages.bottom.x, this.nextPages.bottom.y)}">BOTTOM: ${this.nextPages.bottom.name}</button>` : null}
                    ${this.nextPages.left ? html`<button @click="${() => Router.routeTo(this.nextPages.left.x, this.nextPages.left.y)}">LEFT: ${this.nextPages.left.name}</button>` : null}

                </div>    
            ` : html`no next pages`}
        `
    }
}

customElements.define('app-frame', AppFrame);