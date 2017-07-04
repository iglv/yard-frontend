import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Complexes from './Complexes'
import Complex from './Complex'
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
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
