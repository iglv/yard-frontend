import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import Info from './Info';
import Photos from './Photos';
import Available from './Available';
import Spec from './Special';
import Desc from './Desc';
import Infra from './Infrastructure';
import Offers from './Offers';
import Guide from './Guide';
import Map from './Map';

class Complex extends Component {
  render() {
    return (
      <BodyClassName className="bg-white">
        <div>
          <Info title="Жилой комплекс «Полянка/44»" address="Район Якиманка, улица Большая Полянка, дом 44 • 119180" />
          <Photos />
          <Available />
          <Spec />
          <Desc />
          <Infra />
          <Offers />
          <Guide />
          <Map />
        </div>
      </BodyClassName>
    );
  }
}
export default Complex;