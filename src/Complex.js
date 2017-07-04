import React, { Component } from 'react';
import './App.css';
import ComplexInfo from './Complex/Info';
import ComplexPhotos from './Complex/Photos';
import ComplexAvailable from './Complex/Available';
import ComplexSpec from './Complex/Spec';
import ComplexDesc from './Complex/Desc';
import ComplexInfra from './Complex/Infra';
import ComplexOffers from './Complex/Offers';
import ComplexGuide from './Complex/Guide';
import ComplexMap from './Complex/Map';

class Complex extends Component {
  render() {
    return (
      <div className="App">
        <ComplexInfo />
        <ComplexPhotos />
        <ComplexAvailable />
        <ComplexSpec />
        <ComplexDesc />
        <ComplexInfra />
        <ComplexOffers />
        <ComplexGuide />
        <ComplexMap />
      </div>
    );
  }
}
export default Complex;