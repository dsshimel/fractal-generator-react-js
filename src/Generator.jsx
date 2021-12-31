import React from 'react';
import SeriesVisualizer from './SeriesVisualizer.jsx';

class Generator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SeriesVisualizer X={this.props.generator.X()} Y={this.props.generator.Y()}/>
      </div>
    );
  }
}

export default Generator;