import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Headline from './Headline';
import Cards from './Cards';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Headline/>
        <Cards/>
        <Footer/>
      </div>
    );
  }
}

export default App;
