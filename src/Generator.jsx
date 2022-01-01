import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';
import WavDownloadLink from './WavDownloadLink.jsx';

class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="generator">
        <WavDownloadLink X={this.props.generator.X()} Y={this.props.generator.Y()} genNumber={-2} seriesName="Generator" />
        <SeriesVisualizer X={this.props.generator.X()} Y={this.props.generator.Y()} width={this.props.availableWidth} height={this.props.availableHeight} />
      </div>
    );
  }
}

export default Generator;