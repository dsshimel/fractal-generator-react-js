import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';
import WavDownloadLink from './WavDownloadLink.jsx';
import './Generator.css';

class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  // TODO: Instead of rendering the generator and initiator on canvas,
  // render them as an SVG. This might make it easier to click and drag the 
  // points around.
  // TODO: genNumber={-2} looks weird. It's used for the file name.
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