import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components';

import './App.css';
import Complexes from './Complexes/List/Index'
import Complex from './Complexes/View/Index'
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Complexes} />
          <Route exact path="/сomplex" component={Complex} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
