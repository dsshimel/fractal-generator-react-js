import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';
import WavDownloadLink from './WavDownloadLink.jsx';

class FractalGeneration extends React.Component {
  constructor(props) {
    super(props);
  }

  // we have a prop called "fractal"
  render() {
    return (
      <div>
        <SeriesVisualizer X={this.props.fractal.X()} Y={this.props.fractal.Y()} width={this.props.width} height={this.props.height}/>
        <WavDownloadLink X={this.props.fractal.X()} Y={this.props.fractal.Y()} genNumber={this.props.genNumber} />
      </div>
    );
  }
}

export default FractalGeneration;