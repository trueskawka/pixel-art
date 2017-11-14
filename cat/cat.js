var contextWidth = 460,
    contextHeight = 330;
var ctx;

var frames = 120,
    currentFrame = 0;

var sprites = new Image();
sprites.src = "./sprites/cat_sprite.png";

function init() {
  ctx = document.getElementById('cat').getContext('2d');
  ctx.rect(0, 0, contextWidth, contextHeight);
  ctx.imageSmoothingEnabled = false;

  window.requestAnimationFrame(draw);
}

class Cat {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.imgWidth = width;
    this.imgHeight = height;
    this.width = contextWidth;
    this.height = contextHeight;
  }

  draw() {
    var dx = Math.floor(currentFrame / 30) * 48;
    ctx.drawImage(sprites,
      this.x + dx, this.y, this.imgWidth, this.imgHeight,
      this.x, this.y, this.width, this.height);
  }
}

var cat = new Cat(0, 0, 46, 33);

function draw() {
  cat.draw();

  window.requestAnimationFrame(draw);

  if (currentFrame == frames) {
    currentFrame = 0;
  } else {
    currentFrame++;
  }
}
