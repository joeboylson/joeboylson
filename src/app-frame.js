import {LitElement, html} from 'lit-element';
import Router from './utils/router';

// components
import './app-nav/app-nav';

class AppFrame extends LitElement {
    static get properties() {
        return {
            currentPage: {type: Object},
            isTransforming: {type: Boolean}
        };
    }

    constructor() {
        super();

        this.currentPage = null;
        PubSub.subscribe('ROUTE_TO', (_, data) => this.setPage(data));
    }

    firstUpdated() {
        this.currentPage = Router.findPage(Router.x, Router.y);
    }

    setPage (page) {
        this.currentPage = page;
    }

    // TODO: figure out page transitions

    render() {

        return html `
            <style> @import "src/styles/app-frame.css"; </style>

            <div id='border-info'>
                <p id='' class="mono">(${Router.x}, ${Router.y})</p>
            </div>

            <div class="page ${this.isTransforming ? 'out' : 'in'}">
                ${this.currentPage ? this.currentPage.component : ""}
            </div>

            <app-nav .nextPages="${this.currentPage ? this.currentPage.getNextPages() : null}"></app-nav>

            

        `
    }
}

customElements.define('app-frame', AppFrame);