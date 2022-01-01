class Point {
  constructor(x, y) {
    // [0.0, 1.0]
    this.x = x;

    // [-0.5, 0.5]
    this.y = y;
  }
}

export default Point;

// The first point always has an x value of 0.0, and the last
// point always has an x value of 1.0.
// y-values are on the interval [-0.5, 0.5].
export function createRandomPoints(numPoints) {
  const x = [0.0];
  for (let i = 0; i < numPoints - 2; i++) {
    x.push(Math.random())
  }
  x.sort();
  x.push(1.0);

  const y = [];
  let maxY = -0.5;
  let minY = 0.5;
  for (let i = 0; i < numPoints; i++) {
    // [-0.5, 0.5]
    const nextY = Math.random() - 0.5;
    if (nextY > maxY) maxY = nextY;
    if (nextY < minY) minY = nextY;
    y.push(nextY);
  }

  const result = [];
  for (let i = 0; i < numPoints; i++) {
    result.push(new Point(x[i], y[i]));
  }
  return result;
}