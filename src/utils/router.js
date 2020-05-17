import { html } from 'lit-element';

import '../pages/page-index'

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
            name: '<Index/>',
            component: html`<page-index></page-index>`,
            x: 1,
            y: 0,
            getNextPages
        }, {
            name: '<AboutMe/>',
            component: html`<p>About / Personal</p>`,
            x: 0,
            y: 1,
            getNextPages
        }, {
            name: '<Experience/>',
            component: html`<p>About / Professional</p>`,
            x: 1,
            y: 1,
            getNextPages
        }, {
            name: '<Site/>',
            component: html`<p>About / Site</p>`,
            x: 2,
            y: 1,
            getNextPages
        }, {
            name: '<Projects/>',
            component: html`<p>Projects</p>`,
            x: 1,
            y: 2,
            getNextPages
        }, {
            name: '<Contact/>',
            component: html`<p>name: 'Contact / Me',</p>`,
            x: 1,
            y: 3,
            getNextPages
        }, {
            name: '<Questionaire/>',
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

    getCurrentPage: () => {
        return Router.findPage(Router.x, Router.y);
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