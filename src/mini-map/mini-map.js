import {LitElement, html} from 'lit-element';
import MiniMapRenderer from './renderMiniMap';

class MiniMap extends LitElement {
    static get properties() {
        return { };
    }

    constructor() {
        super();

        PubSub.subscribe('ROUTE_TO', (_, data) => this.renderCanvas());
    }

    firstUpdated() {
        this.renderCanvas();
    }

    renderCanvas() {
        let miniMapCanvas = this.shadowRoot.getElementById('mini-map-canvas');
        MiniMapRenderer.render(miniMapCanvas);
    }

    render() {

        return html `
            <style> @import "src/styles/mini-map.css"; </style>

            <canvas id="mini-map-canvas" width=34 height=44 ></canvas>
        `
    }
}

customElements.define('mini-map', MiniMap);