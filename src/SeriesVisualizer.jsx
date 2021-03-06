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

    // TODO: Rather than setting the canvas dimensions here, they should
    // already be established by the browser's layout of the page. So, we 
    // should just be getting the width and height from the canvas element.
    let canvasWidth, canvasHeight;
    if (this.props.width && this.props.height) {
      canvasWidth = Math.floor(this.props.width);
      canvasHeight = Math.floor(this.props.height);
    } else {
      canvasWidth = 960;
      canvasHeight = 640;
    }

    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    
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

  onClick(e) {
    debugger;
  }

  render() {
    return <canvas ref={this.canvasRef} onClick={this.onClick.bind(this)}></canvas>
  }
}

export default SeriesVisualizer;