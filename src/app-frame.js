import {LitElement, html} from 'lit-element';
import ScrollHandler from './utils/scrollHandler';
import GridCanvas from './utils/gridCanvas';

class AppFrame extends LitElement {
    static get properties() {
        return {
            transform: {type: Number}
        };
    }

    constructor() {
        super();
        this.transform = 0;

        PubSub.subscribe('APP-SCROLL', (_, data) => this.setTransform(data));

        ScrollHandler.init();
    }

    firstUpdated() {

        // initialize grid canvas
        let gridCanvas = this.shadowRoot.getElementById('grid-canvas');
        GridCanvas.init(gridCanvas)

        // initialize scroll handler
        let appFrame = this.shadowRoot.getElementById('app-frame');
        setTimeout(() => {
            ScrollHandler.setMax(appFrame.getBoundingClientRect().height);
        }, 500)
    }

    setTransform(t) {
        let i = (Math.floor(t/100) * 100) ;
        if (this.transform !== i) {

            ScrollHandler.disable();
            this.transform = i;

            setTimeout(() => {
                ScrollHandler.enable()
            }, 500)
        };
    }

    render() {
        return html `
            <style>@import "./src/styles/main.css"</style>

            <canvas id="grid-canvas"></canvas>

            <div class="scroll-binary">
                <p>${this.transform.toString(2).replace(/0/g, '–').replace(/1/g, '|')}</p>
            </div>

            <div 
                id="app-frame"
                style="transform: translateY(${this.transform}px)"    
            >

                <div class="item"></div>

                <h1 class="title">01</h1>

                <div class="item"></div>
                <div class="item"></div>
                <div class="text-item">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, accusamus sed ipsa adipisci quisquam quod commodi tempora omnis libero ad repellat temporibus distinctio facere assumenda sequi dolore dolorem fugiat quaerat, similique ea?</p>
                </div>



                <p>frame</p>
                <i class="lni lni-add-file"></i>
                <i class="lni lni-cart"></i>
                <p>go to site <i class="lni lni-arrow-top-right"></i></p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
                <p>frame</p>
            </div>
        `;
    }
}

customElements.define('app-frame', AppFrame);