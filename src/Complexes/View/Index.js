import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Info from './Info';
import Photos from './Photos';
import Available from './Available';
import Special from './Special';
import Desc from './Desc';
import Infrastructure from './Infrastructure';
import Offer from './Offer';
import Guide from './Guide';
import Maps from './Map';


class Complex extends Component {
  render() {
    const complexName = 'Жилой комплекс «Полянка/44»';

    return (
      <BodyClassName className="bg-white">
        <div>
          <Info title={complexName} address="Район Якиманка, улица Большая Полянка, дом 44 • 119180" />
          <Photos>{'bananas'}{'oranges'}{'apples'}</Photos>
          <Available sentences="950" architect="John McAslan + Partners" developer="Группа «ПСН»" />
          <Special />
          <Desc></Desc>
          <Infrastructure />
          <div className="complex-offers">
            <Grid>
              <h2 className="complex-offers__title">Предложения {complexName}</h2>
              <Row>
                <Col xs={4}><Offer room="1" /></Col>
                <Col xs={4}><Offer room="2" /></Col>
                <Col xs={4}><Offer room="3" /></Col>
              </Row>
            </Grid>
          </div>
          <Guide />
          <Maps />
        </div>
      </BodyClassName>
    );
  }
}
export default Complex;