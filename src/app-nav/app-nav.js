import {LitElement, html} from 'lit-element';
import Router from '../utils/router';

class AppNav extends LitElement {
    static get properties() {
        return {
            nextPages: { type: Object },
            directions: { type: Array },
            invisible: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.nextPages = null;
        this.directions = Router.directions;
    }

    render() {

        return html `
            <style>
                @import "src/styles/app-nav.css"
            </style>

            <div id="nav" class="${this.invisible ? 'invisible' : ''}">

                ${this.nextPages ? html`

                    ${ this.directions.map(direction => {

                        let orientation = ['right', 'left'].includes(direction) ? 'vertical' : 'horizontal'

                        return html`${ 
                            this.nextPages[direction] ? html`
                                <p  class="nav-item ${direction} ${orientation} mono" 
                                    @click="${() => Router.routeTo(this.nextPages[direction].x, this.nextPages[direction].y)}"
                                > ${this.nextPages[direction].name} </p>
                            ` : null
                        }`
                    })}

                ` : null }
                
            </div>

        `
    }
}

customElements.define('app-nav', AppNav);



// ${ this.nextPages.top ? html`
//     <p  class="nav-item top" 
//         @click="${() => Router.routeTo(this.nextPages.top.x, this.nextPages.top.y)}"
//     > ${this.nextPages.top.name} </p>` 
//     : null
// }

// ${ this.nextPages.right ? html`
//     <p  class="nav-item right" 
//         @click="${() => Router.routeTo(this.nextPages.right.x, this.nextPages.right.y)}"
//     > ${this.nextPages.right.name} </p>` 
//     : null
// }

// ${ this.nextPages.bottom ? html`
//     <p  class="nav-item bottom" 
//         @click="${() => Router.routeTo(this.nextPages.bottom.x, this.nextPages.bottom.y)}"
//     > ${this.nextPages.bottom.name} </p>` 
//     : null
// }

// ${ this.nextPages.top ? html`
//     <p  class="nav-item top" 
//         @click="${() => Router.routeTo(this.nextPages.right.x, this.nextPages.right.y)}"
//     >
//         RIGHT: ${this.nextPages.right.name}
//     </p>` 
//     : null
// }