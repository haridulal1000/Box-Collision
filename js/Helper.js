function distance(x1, y1, x2, y2) {
  let x = x1 - x2;
  let y = y1 - y2;
  let distSq = x * x + y * y;
  return Math.sqrt(distSq);
}
function random(min, max) {
  return min + Math.random() * (max - min);
}
function generateElement() {
  const RADIUS_UPPER = 10;
  const RADIUS_LOWER = 5;
  const PADDING = 5;
  const VELOCITY_LIMIT = 5;
  const radius = random(RADIUS_LOWER, RADIUS_UPPER);
  const x = random(radius + PADDING, width - radius - PADDING);
  const y = random(radius + PADDING, height - radius - PADDING);
  const xVel = random(-VELOCITY_LIMIT, VELOCITY_LIMIT);
  const yVel = random(-VELOCITY_LIMIT, VELOCITY_LIMIT);
  const red = random(0, 255);
  const green = random(0, 255);
  const blue = random(0, 255);
  const color = { red, green, blue };
  return { radius, x, y, xVel, yVel, color };
}
