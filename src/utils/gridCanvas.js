const {
    Path,
    Tool,
    Layer,
    Point
} = paper;

const GridCanvas = {
    init: (element) => {
        element.width = 800;
        element.height = 800;

        paper.setup(element);

        let range = _.range(0, 900, 100)

        for(let i of range) {

            let from = new Point(0, i)
            var to = new Point(800, i);

            var path = new Path.Line(from, to);
            path.strokeColor = '#F7F7F7';

            let from2 = new Point(i, 0)
            var to2 = new Point(i, 800);

            var path2 = new Path.Line(from2, to2);
            path2.strokeColor = '#F7F7F7';

        }

    }
};

export default GridCanvas;