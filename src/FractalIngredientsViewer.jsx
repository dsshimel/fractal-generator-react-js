import React from 'react';
import Generator from './Generator.jsx';
import Initiator from './Initiator.jsx';

class FractalIngredientsViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Generator generator={this.props.generator} />
        <Initiator initiator={this.props.initiator} />
      </div>
    );
  }
}

export default FractalIngredientsViewer;