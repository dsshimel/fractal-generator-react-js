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
        <Generator generator={this.props.generator} availableWidth={this.props.availableWidth / 2} availableHeight={this.props.availableHeight} randomizeGenerator={this.props.randomizeGenerator} />
        
        <Initiator initiator={this.props.initiator} availableWidth={this.props.availableWidth / 2} availableHeight={this.props.availableHeight} randomizeInitiator={this.props.randomizeInitiator} />
      </div>
    );
  }
}

export default FractalIngredientsViewer;