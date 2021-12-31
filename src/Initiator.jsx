import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';
import WavDownloadLink from './WavDownloadLink.jsx';

class Initiator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SeriesVisualizer X={this.props.initiator.X()} Y={this.props.initiator.Y()}/>
        <WavDownloadLink X={this.props.initiator.X()} Y={this.props.initiator.Y()} genNumber={0} />
      </div>
    );
  }
}

export default Initiator;