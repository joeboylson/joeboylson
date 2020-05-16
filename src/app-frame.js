import {LitElement, html} from 'lit-element';
import Router from './utils/router';
import MiniMapRenderer, { colorWays } from './mini-map/renderMiniMap';

// components
import './app-nav/app-nav';
import './mini-map/mini-map';

class AppFrame extends LitElement {
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
        MiniMapRenderer.switchColorWay(this.mapIsVisible ? colorWays.dark : colorWays.light);
    }

    // TODO: figure out page transitions

    render() {

        return html `
            <style> @import "src/styles/app-frame.css"; </style>

            <div 
                id='mini-map'
                @click="${this.toggleMap}"
            >
                <mini-map></mini-map>
            </div>

            <div id="map" class="${this.mapIsVisible ? 'visible' : null}">
                <h1>MAP</h1>
            </div>

            <div id='border-info'>
                <p id='' class="mono">(${Router.x}, ${Router.y})</p>
            </div>

            <div class="page ${this.direction} ${this.isTransitioning ? 'out' : 'in'}">
                ${this.currentPage ? this.currentPage.component : ""}
                <p id="test">
                    at File.buildCodeFrameError (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/core/lib/transformation/file/file.js:261:12)
                    at Scope.checkBlockScopedCollisions (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/scope/index.js:344:22)
                    at Scope.registerBinding (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/scope/index.js:501:16)
                    at Scope.registerDeclaration (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/scope/index.js:444:12)
                    at Object.BlockScoped (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/scope/index.js:187:28)
                    at Object.newFn (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/visitors.js:230:17)
                    at NodePath._call (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/path/context.js:53:20)
                    at NodePath.call (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/path/context.js:36:14)
                    at NodePath.visit (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/path/context.js:88:12)
                    at TraversalContext.visitQueue (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/@babel/traverse/lib/context.js:118:16)
                    Error { SyntaxError: 'with' in strict mode (7:8)
                    at Parser.raise (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:776:15)
                    at Parser.parseWithStatement (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:4428:12)
                    at Parser.parseStatementContent (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:4018:21)
                    at Parser.parseStatement (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:3962:17)
                    at Parser.parseBlockOrModuleBlockBody (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:4513:23)
                    at Parser.parseBlockBody (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:4500:10)
                    at Parser.parseBlock (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:4489:10)
                    at Parser.parseFunctionBody (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:3754:24)
                    at Parser.parseArrowExpression (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:3706:10)
                    at Parser.parseParenAndDistinguishExpression (/Users/jboylson/Projects/joeboylson/node_modules/polymer-cli/node_modules/babylon/lib/index.js:3322:12) pos: 122, loc: Position { line: 7, column: 8 } }
                </p> 
            </div>

            <app-nav
                .nextPages="${this.currentPage ? this.currentPage.getNextPages() : null}"
                .invisible="${this.isTransitioning}"
            ></app-nav>

            

        `
    }
}

customElements.define('app-frame', AppFrame);