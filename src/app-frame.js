import {LitElement, html, css} from 'lit-element';
import Router from './utils/router';

// components
import './app-nav/app-nav';
import './mini-map/mini-map';

class AppFrame extends LitElement {

    static get styles() {
    return [
        css`
            :host {
                background-color: red;
            }`
        ]
    }

    static get properties() {
        return {
            currentPage: {type: Object},
            mapIsVisible: {type: Boolean},
            direction: {type: String},
            isTransitioning: {type: Boolean},
        };
    }

    constructor() {
        super();

        this.currentPage = null;
        this.mapIsVisible = false;
        this.direction = null;

        PubSub.subscribe('ROUTE_TO', (_, data) => this.setPage(data));
    }

    firstUpdated() {
        this.currentPage = Router.findPage(Router.x, Router.y);
    }

    setPage(page) {

        if (page.y !== this.currentPage.y) {
            if (page.y < this.currentPage.y) this.direction = 'up';
            else this.direction = 'down'
        };

        if (page.x !== this.currentPage.x) {
            if (page.x < this.currentPage.x) this.direction = 'left';
            else this.direction = 'right'
        }

        this.isTransitioning = true;

        setTimeout(() => {
            this.isTransitioning = false;
            this.currentPage = page;
        }, 300);

        setTimeout(() => {
            this.direction = null;
        }, 600);
    }

    toggleMap() {
        this.mapIsVisible = !this.mapIsVisible;
    }

    render() {

        return html `
            <style> @import "src/styles/app-frame.css"; </style>

            <div
                id="background-image"
                style="
                    background-image: url(/src/images/32A_0240.jpg);
                    transform: translate(${Router.x * -10}%, ${Router.y * -10}%)
                "
            ></div>

            <div 
                id='mini-map'
                @click="${this.toggleMap}"
            >
                <mini-map></mini-map>
            </div>

            <div id="map" class="${this.mapIsVisible ? 'visible' : ''}">
                <h1>MAP</h1>
            </div>

            <div id='border-info'>
                <p id='' class="mono">(${Router.x}, ${Router.y})</p>
            </div>

            <div class="page ${this.direction || ''} ${this.isTransitioning ? 'out' : 'in'}">
                ${ this.currentPage ? this.currentPage.component : ''}
            </div>

            <app-nav
                .nextPages="${this.currentPage ? this.currentPage.getNextPages() : null}"
                .invisible="${this.isTransitioning}"
            ></app-nav>

            

        `
    }
}

customElements.define('app-frame', AppFrame);