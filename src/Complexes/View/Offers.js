import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Offer from './Offer';

const Offers = styled.div`
  padding: 4rem 0;
  text-align: center;
  background-color: #f4f5f9;
`;

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 1.5rem;
`;

export default () => {
  return (
    <Offers>
      <Grid>
        <Title>Предложения в ЖК «Полянка/44»</Title>
        <Row>
          <Col xs={4}><Offer room="1" /></Col>
          <Col xs={4}><Offer room="2" /></Col>
          <Col xs={4}><Offer room="3" /></Col>
        </Row>
      </Grid>
    </Offers>
  );
};
