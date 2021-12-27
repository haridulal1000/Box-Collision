function Ball(info) {
  this.radius = info.radius;
  this.x = info.x;
  this.y = info.y;
  this.xVel = info.xVel;
  this.yVel = info.yVel;
  this.color = info.color;
  this.show = function () {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = `rgb(${this.color.red},${this.color.green},${this.color.blue})`;
    context.fill();
  };
  this.update = function () {
    if (this.x + this.radius >= width || this.x - this.radius < 0) {
      this.xVel *= -1;
    }
    if (this.y + this.radius >= height || this.y - this.radius < 0) {
      this.yVel *= -1;
    }
    this.x += this.xVel;
    this.y += this.yVel;
  };

  this.collides = function (ball) {
    let dist = distance(this.x, this.y, ball.x, ball.y);
    if (dist <= this.radius + ball.radius && this !== ball) {
      let distX = this.x - ball.x;
      let distY = this.y - ball.y;
      let penDepth = this.radius + ball.radius - dist;
      let unitDistX = distX / Math.sqrt(distX ** 2 + distY ** 2);
      let unitDistY = distY / Math.sqrt(distX ** 2 + distY ** 2);
      let penResX = (unitDistX * penDepth) / 2;
      let penResY = (unitDistY * penDepth) / 2;
      this.x += penResX;
      this.y += penResY;
      ball.x -= penResX;
      ball.y -= penResY;

      let tempX = ball.xVel;
      let tempY = ball.yVel;
      ball.xVel = this.xVel;
      ball.yVel = this.yVel;
      this.xVel = tempX;
      this.yVel = tempY;
    }
  };
}
