let Canvas = require('canvas');

let width = 1200;
let height = 600;

let canvas;
let ctx;

function drawImage () {
  canvas = new Canvas(width, height);
  ctx = canvas.getContext('2d');

  drawBackground();

  return canvas;
}

function drawBackground() {
  ctx.fillStyle = "#f4f2ef";
  ctx.fillRect(0, 0, width, height);
}

module.exports = drawImage;
