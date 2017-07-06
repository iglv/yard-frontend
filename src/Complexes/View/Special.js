import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <Grid>
      <div className="complex-spec">
        <h2 className="complex-spec__title">Характеристики</h2>
        <Row>
          <Col xs={2}>
            <dt className="complex-spec__name">Количество квартир:</dt>
            <dt className="complex-spec__name">Статус:</dt>
            <dt className="complex-spec__name">Цены:</dt>             
          </Col>
          <Col xs={2}>
            <dd className="complex-spec__data">1 503</dd>
            <dd className="complex-spec__data">Квартиры</dd>
            <dd className="complex-spec__data">от 5.3 до 143.5 млн</dd>
          </Col>
          <Col xs={2}>
            <dt className="complex-spec__name">Количество квартир:</dt>
            <dt className="complex-spec__name">Статус:</dt>
            <dt className="complex-spec__name">Цены:</dt>             
          </Col>
          <Col xs={2}>
            <dd className="complex-spec__data">1 503</dd>
            <dd className="complex-spec__data">Квартиры</dd>
            <dd className="complex-spec__data">от 5.3 до 143.5 млн</dd>
          </Col>
          <Col xs={2}>
            <dt className="complex-spec__name">Количество квартир:</dt>
            <dt className="complex-spec__name">Статус:</dt>
            <dt className="complex-spec__name">Цены:</dt>             
          </Col>
          <Col xs={2}>
            <dd className="complex-spec__data">1 503</dd>
            <dd className="complex-spec__data">Квартиры</dd>
            <dd className="complex-spec__data">от 5.3 до 143.5 млн</dd>
          </Col>
        </Row>
      </div>
    </Grid>
  );
};
