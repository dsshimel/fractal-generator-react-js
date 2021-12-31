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
        <WavDownloadLink X={this.props.generator.X()} Y={this.props.generator.Y()} genNumber={-2} seriesName="generator" />
        <SeriesVisualizer X={this.props.generator.X()} Y={this.props.generator.Y()}/>
      </div>
    );
  }
}

export default Generator;