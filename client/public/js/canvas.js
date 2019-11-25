let gridCanvas, ctx

const setCanvasSize = () => {
  gridCanvas.width = window.innerWidth;
  gridCanvas.height = window.innerHeight;
}

const draw = () => {

  let numberOfColumns = window.innerWidth > 1000 ? 13 : 9;
  let columnSize = window.innerWidth / numberOfColumns;

  for (let i=0; i<numberOfColumns; i++) {
    if (i>=1) {numberOfColumns
      ctx.strokeStyle = "#EEE";
      ctx.beginPath();
      ctx.moveTo(columnSize*i, 0);
      ctx.lineTo(columnSize*i, window.innerHeight);
      ctx.stroke();
    }
  }

}

window.addEventListener('DOMContentLoaded', () => {
  gridCanvas = document.getElementById('grid-canvas')
  setCanvasSize();

  ctx = gridCanvas.getContext('2d')
  draw();

  window.addEventListener('resize', () => {
    setCanvasSize();
    draw();
  })
})
