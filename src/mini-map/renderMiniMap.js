import Router from '../utils/router';

let colorWays =  {
    light: {
        lineColor: '#2C2C2C',
        backgroundColor: 'white',
        currentPageFill: 'red',
    },
    dark: {
        lineColor: 'white',
        backgroundColor: '#2C2C2C',
        currentPageFill: 'blue',
    }
};

const MiniMapRenderer = {
    currentColorWay: colorWays.light,
    render: (canvas) => {

        if (canvas) {
            paper.setup(canvas);
        }
        let pages = Router.pages;
        let currentPage = Router.getCurrentPage();

        let {lineColor, backgroundColor, currentPageFill} = MiniMapRenderer.currentColorWay;

        for (let p of pages) {

            let isCurrentPage = (p.x == currentPage.x && p.y == currentPage.y)

            let path = new paper.Path.Rectangle([ ((p.x * 10) + 2), ((p.y * 10) + 2)], [10, 10]);
            path.strokeWidth = 0.5;
            path.strokeColor = lineColor;
            path.fillColor = isCurrentPage ? currentPageFill : backgroundColor;
        }
    },
    switchColorWay(colorWay) {
        MiniMapRenderer.currentColorWay = colorWay;
        MiniMapRenderer.render()
    }
}

export { colorWays }

export default MiniMapRenderer;