var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

const starCount = 120;
const stars = [];
const starColors = ["red", "white", "orange", "blue"];

for (let i = 0; i < starCount; i++) {
  stars[i] = new AnimCircle(
    innerWidth * Math.random(),
    innerHeight * Math.random(),
    2 * Math.random(),
    0.5,
    starColors[Math.round(Math.random() * starColors.length)],
    ctx
  );
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < starCount; i++) {
    stars[i].update();
  }
}
animate();

function AnimCircle(x, y, r, v, color, ctx) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.v = v;
  this.ctx = ctx;

  this.dx = v * (Math.random() * 2 - 1);
  this.dy = v * (Math.random() * 2 - 1);
  this.ctx.fillStyle = color;

  this.draw = function () {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.fill();
  };

  this.update = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + r > innerWidth) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = innerWidth - r;
    }
    if (this.y + r > innerHeight) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = innerHeight - r;
    }

    this.draw();
  };
}
