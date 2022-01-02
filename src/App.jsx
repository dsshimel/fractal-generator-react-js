import React from 'react';
import FractalGenerationsViewer from './FractalGenerationsViewer.jsx';
import FractalIngredientsViewer from './FractalIngredientsViewer.jsx';
import LinearFractal from './LinearFractal.js';
import {createRandomPoints} from './Point.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      generator: new LinearFractal(),
      initiator: new LinearFractal()
    };
  }

  // Called after the App component renders, so the user will see
  // something drawn on the screen before we kick off the expensive
  // fractal calculations
  componentDidMount() {
    const numGeneratorPoints = 3 + Math.floor(Math.random() * 5);
    const numInitiatorPoints = 2 + Math.floor(Math.random() * 4);
    
    const newGenerator = new LinearFractal(createRandomPoints(numGeneratorPoints));
    const newInitiator = new LinearFractal(createRandomPoints(numInitiatorPoints));

    this.setState({
      generator: newGenerator,
      initiator: newInitiator
    });
  }

  randomizeGenerator() {
    const numGeneratorPoints = 3 + Math.floor(Math.random() * 5);
    const newGenerator = new LinearFractal(createRandomPoints(numGeneratorPoints));
    this.setState({
      generator: newGenerator
    });    
  }

  randomizeInitiator() {
    const numInitiatorPoints = 2 + Math.floor(Math.random() * 4);
    const newInitiator = new LinearFractal(createRandomPoints(numInitiatorPoints));
    this.setState({
      initiator: newInitiator
    });    
  }

  render() {
    const windowWidth = Math.floor(window.innerWidth * 0.8);
    const windowHeight = Math.floor(window.innerHeight * 0.8);
    console.log("window width: " + windowWidth);
    console.log("window height: " + windowHeight);
    return (
      <main>
        <div className="ingredients">
          <FractalIngredientsViewer generator={this.state.generator} initiator={this.state.initiator} randomizeGenerator={this.randomizeGenerator.bind(this)} randomizeInitiator={this.randomizeInitiator.bind(this)} availableWidth={windowWidth} availableHeight={Math.floor(windowHeight / 3)} />
        </div>
        <div className="generations">
          <FractalGenerationsViewer className="generations" generator={this.state.generator} initiator={this.state.initiator} numGenerations={4} availableWidth={windowWidth} availableHeight={Math.floor(2 * windowHeight / 3)} />
        </div>
      </main>
    );
  }
}

export default App;