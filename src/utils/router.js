import { html } from 'lit-element';

function getNextPages () {
    return {
        top: Router.findPage(this.x, this.y - 1),
        right: Router.findPage(this.x + 1, this.y),
        bottom: Router.findPage(this.x, this.y + 1),
        left: Router.findPage(this.x - 1, this.y)
    }
}

const Router = {
    
    x: 1,
    y: 0,

    pages: [{
            name: 'Index',
            component: html`<p>Index</p>`,
            x: 1,
            y: 0,
            getNextPages
        }, {
            name: 'About / Personal',
            component: html`<p>About / Personal</p>`,
            x: 0,
            y: 1,
            getNextPages
        }, {
            name: 'About / Professional',
            component: html`<p>About / Professional</p>`,
            x: 1,
            y: 1,
            getNextPages
        }, {
            name: 'About / Site',
            component: html`<p>About / Site</p>`,
            x: 2,
            y: 1,
            getNextPages
        }, {
            name: 'Projects',
            component: html`<p>Projects</p>`,
            x: 1,
            y: 2,
            getNextPages
        }, {
            name: 'Contact / Me',
            component: html`<p>name: 'Contact / Me',</p>`,
            x: 1,
            y: 3,
            getNextPages
        }, {
            name: 'Contact / Questionaire',
            component: html`<p>name: 'Contact / Questionaire',</p>`,
            x: 2,
            y: 3,
            getNextPages
        }
    ],

    directions: ['top', 'right', 'bottom', 'left'],

    findPage: (x, y) => {
        return Router.pages.find(page => {
            if (page.x === x && page.y === y) return page;
        })
    },

    routeTo: (x, y) => {

        let nextPage = Router.findPage(x, y);

        if (nextPage) {
            Router.x = nextPage.x;
            Router.y = nextPage.y;

            PubSub.publish('ROUTE_TO', nextPage)
        }

    }
}

export default Router;