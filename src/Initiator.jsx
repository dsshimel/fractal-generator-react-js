import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';
import WavDownloadLink from './WavDownloadLink.jsx';
import './Initiator.css';

class Initiator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="initiator">
        <div className="initiatorHeader">
          <WavDownloadLink X={this.props.initiator.X()} Y={this.props.initiator.Y()} genNumber={-1} seriesName="Initiator"/>
          <button onClick={this.props.randomizeInitiator}>Randomize</button>
        </div>
        <SeriesVisualizer X={this.props.initiator.X()} Y={this.props.initiator.Y()} width={this.props.availableWidth} height={this.props.availableHeight} />
      </div>
    );
  }
}

export default Initiator;