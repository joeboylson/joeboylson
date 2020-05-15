import Router from '../utils/router';

const MiniMapRenderer = {
    render: (canvas) => {
        paper.setup(canvas);
        let pages = Router.pages;
        let currentPage = Router.getCurrentPage();

        for (let p of pages) {

            let isCurrentPage = (p.x == currentPage.x && p.y == currentPage.y)

            let path = new paper.Path.Rectangle([ ((p.x * 10) + 2), ((p.y * 10) + 2)], [10, 10]);
            path.strokeWidth = 0.5;
            path.strokeColor = '#2C2C2C';
            path.fillColor = isCurrentPage ? '#2C2C2C' : 'white';
        }

    }
}

export default MiniMapRenderer;