import Point from './Point.js';
import Segment from './Segment.js';

class LinearFractal {
  constructor(points) {
    // Array<Point>
    // Must have at least two points
    this.points = points || [new Point(0.0, 0.0), new Point(1.0, 0.0)];
  }

  X() {
    return this.points.map(p => p.x);
  }

  Y() {
    return this.points.map(p => p.y);
  }

  getSegments() {
    const segments = [];
    for (let i = 1; i < this.points.length; i++) {
      segments.push(
        new Segment(
          this.points[i - 1],
          this.points[i]))
    }
    return segments;
  }

  copyPoints() {
    const pointsCopy = [];
    for (let point of this.points) {
      pointsCopy.push(new Point(point.x, point.y));
    }
    return pointsCopy;
  }
}

export default LinearFractal;

export function iterateFractal(fractal, generator) {
  const nextFractalLayerPoints = [];
  for (let fractalSegment of fractal.getSegments()) {
    const nextFractalSegmentPoints = generator.copyPoints();

    const deltaXFractal = fractalSegment.end.x - fractalSegment.start.x;
    const xDisplacementFractal = fractalSegment.start.x
    // Ranges between [-1.0, 1.0] because the max point Y value is 0.5 in either direction.
    const deltaYFractal = fractalSegment.end.y - fractalSegment.start.y
    const yDisplacementFractal = (fractalSegment.end.y + fractalSegment.start.y) / 2

    // If the segment is infinitely narrow, so we can't fractallize it.
    if (deltaXFractal <= 0) {
      // There was also no change in y, so skip it.
      if (deltaYFractal <= 0) {
        continue;
      }

      // We'll add a straight vertical line (jumps are allowed).
      nextFractalLayerPoints.push(new Point(fractalSegment.start.x, fractalSegment.start.y));
      nextFractalLayerPoints.push(new Point(fractalSegment.end.x, fractalSegment.end.y));
      continue;
    }

    for (let point of nextFractalSegmentPoints) {
      point.x = (deltaXFractal * point.x) + xDisplacementFractal
      point.y = (deltaYFractal * point.y) + yDisplacementFractal
    }

    nextFractalLayerPoints.push(...nextFractalSegmentPoints)
  }

  return new LinearFractal(nextFractalLayerPoints);
}