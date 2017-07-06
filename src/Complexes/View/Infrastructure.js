import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <Grid>
      <div className="complex-infra">
        <h2 className="complex-infra__title">Инфраструктура</h2>
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
      </div>
    </Grid>
  );
};
