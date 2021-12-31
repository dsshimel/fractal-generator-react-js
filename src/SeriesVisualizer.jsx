import React from "react"

class SeriesVisualizer extends React.Component {
  constructor(props) {
    // props will have the X and Y values to render.
    super(props);

    this.canvasRef = React.createRef();
  }


  componentDidMount() {
    this.renderSeries();
  }

  componentDidUpdate() {
    this.renderSeries();
  }

  renderSeries() {
    const canvas = this.canvasRef.current;
    const boundingRect = canvas.parentElement.getBoundingClientRect();
    canvas.setAttribute('width', boundingRect.width);
    canvas.setAttribute('height', boundingRect.height);
    const canvasWidth = canvas.getAttribute('width');
    const canvasHeight = canvas.getAttribute('height');
    console.log(canvasWidth + "x" + canvasHeight);
    const ctx = canvas.getContext('2d');

    // X is on [0.0, 1.0]
    // Y is on [-0.5, 0.5]
    const X = this.props.X;
    const Y = this.props.Y;
    const firstDrawingYValue = canvasHeight - (canvasHeight * ((0.5 + Y[0])));
    ctx.moveTo(canvasWidth * X[0], firstDrawingYValue);

    for (var i = 1; i < X.length; i++) {
      const x = canvasWidth * X[i];
      const y = canvasHeight - (canvasHeight * ((0.5 + Y[i])));
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }

  render() {
    // TODO: maybe pass the canvas size as a prop
    return <canvas ref={this.canvasRef}></canvas>
  }
}

export default SeriesVisualizer;