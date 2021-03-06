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
      <div className={'generation' + this.props.genNumber}>
        <WavDownloadLink X={this.props.fractal.X()} Y={this.props.fractal.Y()} genNumber={this.props.genNumber} seriesName={"Generation" + this.props.genNumber} />
        <SeriesVisualizer X={this.props.fractal.X()} Y={this.props.fractal.Y()} width={this.props.availableWidth} height={this.props.availableHeight} />
      </div>
    );
  }
}

export default FractalGeneration;