import React, {Component} from 'react';
import BodyClassName from 'react-body-classname';
import styled from 'styled-components';
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


const OffersStyled = styled.div`
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


class Complex extends Component {
  render() {
    const complexName = 'Жилой комплекс «Полянка/44»';

    return (
      <BodyClassName className="bg-white">
        <div>
          <Info title={complexName} address="Район Якиманка, улица Большая Полянка, дом 44 • 119180" />
          <Photos></Photos>
          <Available sentences="950" architect="John McAslan + Partners" developer="Группа «ПСН»" />
          <Special />
          <Desc></Desc>
          <Infrastructure />
          <OffersStyled>
            <Grid>
              <StyledH2>Предложения {complexName}</StyledH2>
              <Row>
                <Col xs={4}><Offer room="1" /></Col>
                <Col xs={4}><Offer room="2" /></Col>
                <Col xs={4}><Offer room="3" /></Col>
              </Row>
            </Grid>
          </OffersStyled>
          <Guide />
          <Maps />
        </div>
      </BodyClassName>
    );
  }
}
export default Complex;