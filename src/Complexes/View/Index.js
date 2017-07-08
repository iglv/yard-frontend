import React, {Component} from 'react';
import BodyClassName from 'react-body-classname';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Info from './Info';
import Photos from './Photos';
import Summary from './Summary';
import Special from './Special';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offer from './Offer';
import Guide from './Guide';
import Maps from './Map';


const Offers = styled.div`
  padding: 4rem 0;
       text-align: center;
  background-color: #f4f5f9;
`;
const StyledH2 = styled.div`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 1.5rem;
`;

const complexName = 'Жилой комплекс «Полянка/44»';

export default props =>
  <BodyClassName className="bg-white">
    <div>
      <Info title={complexName} address="Район Якиманка, улица Большая Полянка, дом 44 • 119180" />
      <Photos></Photos>
      <Available sentences="950" architect="John McAslan + Partners" developer="Группа «ПСН»" />
      <Special />
      <Description></Description>
      <Infrastructure />
      <Offers>
        <Grid>
          <StyledH2>Предложения {complexName}</StyledH2>
          <Row>
            <Col xs={4}><Offer room={1} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} /></Col>
            <Col xs={4}><Offer room={2} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} /></Col>
            <Col xs={4}><Offer room={3} space={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} /></Col>
          </Row>
        </Grid>
      </Offers>
      <Guide subtitle="Якиманка" title="Исторический центр Москвы в двух километрах&nbsp;от Кремля" link="Гид по Якиманке →" map="polyanka-photo.png" />
      <Maps map="map.png" />
    </div>
  </BodyClassName>
;