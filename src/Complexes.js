import React, { Component } from 'react';
import './App.css';
import Hero from './Hero';
import Headline from './Headline';
import Cards from './Cards';
import Footer from './Footer';

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