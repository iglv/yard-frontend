import React, { Component } from 'react';
import Hero from './Hero';
import Headline from './Headline';
import Cards from './Cards';

class Complexes extends Component {
  render() {
    return (
      <div className="App">
        <Hero/>
        <Headline/>
        <Cards/>
      </div>
    );
  }
}
export default Complexes;