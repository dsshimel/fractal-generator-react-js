import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';
import WavDownloadLink from './WavDownloadLink.jsx';
import './Generator.css';

class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="generator">
        <div className="generatorHeader">
          <WavDownloadLink X={this.props.generator.X()} Y={this.props.generator.Y()} genNumber={-2} seriesName="Generator" />
          <button onClick={this.props.randomizeGenerator}>Randomize</button>
        </div>
        <SeriesVisualizer X={this.props.generator.X()} Y={this.props.generator.Y()} width={this.props.availableWidth} height={this.props.availableHeight} />
      </div>
    );
  }
}

export default Generator;