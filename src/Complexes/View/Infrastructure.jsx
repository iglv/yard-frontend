import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Infrastructure = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  border-top: solid 1px #e0e0e1;
`;

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  margin: 0;
`;

export default () => (
  <Grid>
    <Infrastructure>
      <Title>Инфраструктура</Title>
      <Row>
        <Col xs={2}>
          <p>Бассейн</p>
          <p>Частная школа</p>
        </Col>
        <Col xs={2}>
          <p>Детский сад</p>
          <p>Частная школа</p>
        </Col>
        <Col xs={2}>
          <p>Частная школа</p>
          <p>Частная школа</p>
        </Col>
        <Col xs={2}>
          <p>Частная школа</p>
        </Col>
        <Col xs={2}>
          <p>Частная школа</p>
        </Col>
        <Col xs={2}>
          <p>Частная школа</p>
        </Col>
      </Row>
    </Infrastructure>
  </Grid>
  );
