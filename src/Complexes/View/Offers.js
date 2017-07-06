import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Btn from '../Btn';
import Offer from './Offer';

export default () => {
  return (
    <div className="complex-offers">
      <Grid>
        <h2 className="complex-offers__title">Предложения в ЖК «Полянка/44»</h2>
        <Row>
          <Col xs={4}><Offer room="1" /></Col>
          <Col xs={4}><Offer room="2" /></Col>
          <Col xs={4}><Offer room="3" /></Col>
        </Row>
      </Grid>
    </div>
  );
};
