var contextWidth = 320,
    contextHeight = 320;
var ctx;

var frames = 120,
    currentFrame = 0;

var sprites = new Image();
sprites.src = "./sprites/octopus.png";

function init() {
  ctx = document.getElementById('octopus').getContext('2d');
  ctx.rect(0, 0, contextWidth, contextHeight);
  ctx.imageSmoothingEnabled = false;

  window.requestAnimationFrame(draw);
}

class Octopus {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.imgWidth = width;
    this.imgHeight = height;
    this.width = contextWidth;
    this.height = contextHeight;
  }

  draw() {
    var dx = Math.floor(currentFrame / 60) * 32;
    ctx.drawImage(sprites,
      this.x + dx, this.y, this.imgWidth, this.imgHeight,
      this.x, this.y, this.width, this.height);
  }
}

var octo = new Octopus(0, 0, 32, 32);

function draw() {
  ctx.fillStyle = 'white';
  ctx.fill();
  octo.draw();

  window.requestAnimationFrame(draw);

  if (currentFrame == frames) {
    currentFrame = 0;
  } else {
    currentFrame++;
  }
}
