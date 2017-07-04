import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import ComplexInfo from './Info';
import ComplexPhotos from './Photos';
import ComplexAvailable from './Available';
import ComplexSpec from './Spec';
import ComplexDesc from './Desc';
import ComplexInfra from './Infra';
import ComplexOffers from './Offers';
import ComplexGuide from './Guide';
import ComplexMap from './Map';

class Complex extends Component {
  render() {
    return (
      <BodyClassName className="bg-white">
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
      </BodyClassName>
    );
  }
}
export default Complex;