import React from 'react';
import FractalGeneration from './FractalGeneration.jsx';
import {iterateFractal} from './LinearFractal.js';
import './FractalGenerationsViewer.css';

class FractalGenerationsViewer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // Actually, we won't have a premade list of generations. We'll
    // compute them from the provided fractal and generator.
    // const generationsList = this.props.generations.map((gen) => {
    //   return <FractalGeneration fractal={gen} />; 
    // })
    const generationsList = [];
    let nextGeneration = this.props.initiator;
    for (let i = 0; i < this.props.numGenerations; i++) {
      nextGeneration = iterateFractal(nextGeneration, this.props.generator);
      generationsList.push(nextGeneration);
    }

    const generationElementsList = generationsList.map(
      (gen, index) => { 
        // The division by 2 is because we're drawing a 2x2 grid of fractals. 
        return <FractalGeneration key={index} fractal={gen} genNumber={index} availableWidth={this.props.availableWidth / 2} availableHeight={this.props.availableHeight / 2} /> 
      }
    );

    return (
      <div className="generationsContainer">
        {generationElementsList}
      </div>
    );
  }
}

export default FractalGenerationsViewer;