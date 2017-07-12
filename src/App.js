import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Complexes from './Complexes/List';
import Complex from './Complexes/View';
import Header from './Header';
import Footer from './Footer';

export default() =>
  (<Router>
    <div>
      <Header />
      <Route exact path="/" component={Complexes} />
      <Route exact path="/сomplex" component={Complex} />
      <Footer />
    </div>
  </Router>);
