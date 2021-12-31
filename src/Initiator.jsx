import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';

class Initiator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SeriesVisualizer X={this.props.initiator.X()} Y={this.props.initiator.Y()}/>
      </div>
    );
  }
}

export default Initiator;