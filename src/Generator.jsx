import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';
import WavDownloadLink from './WavDownloadLink.jsx';

class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SeriesVisualizer X={this.props.generator.X()} Y={this.props.generator.Y()}/>
        <WavDownloadLink X={this.props.generator.X()} Y={this.props.generator.Y()} genNumber={-1} />
      </div>
    );
  }
}

export default Generator;