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
        return <FractalGeneration key={index} fractal={gen} genNumber={index} /> 
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