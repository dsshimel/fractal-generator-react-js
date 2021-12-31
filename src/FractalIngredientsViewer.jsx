import React from 'react';
import Generator from './Generator.jsx';
import Initiator from './Initiator.jsx';
import './FractalIngredientsViewer.css';

class FractalIngredientsViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ingredientsContainer">
        <Generator generator={this.props.generator} />
        <Initiator initiator={this.props.initiator} />
      </div>
    );
  }
}

export default FractalIngredientsViewer;