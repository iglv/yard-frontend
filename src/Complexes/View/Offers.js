import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Btn from '../Btn';

export default () => {
  return (
    <div className="complex-offers">
      <Grid>
        <h2 className="complex-offers__title">Предложения в ЖК «Полянка/44»</h2>
        <Row>
          <Col xs={4}>
            <div className="complex-card">
              <h3 className="complex-card__title">1-комнатные квартиры</h3>
              <p className="complex-card__info">
                <span className="complex-card__name">Площадь</span>
                от 59 до 120 м²
              </p>
              <p className="complex-card__info">
                <span className="complex-card__name">Стоимость</span>
                от 20.3 до 84.2 млн руб
              </p>
              <div className="complex-card__btn">
                <Btn href="/" title="Посмотреть предложения"></Btn>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="complex-card">
              <h3 className="complex-card__title">2-комнатные квартиры</h3>
              <p className="complex-card__info">
                <span className="complex-card__name">Площадь</span>
                от 59 до 120 м²
              </p>
              <p className="complex-card__info">
                <span className="complex-card__name">Стоимость</span>
                от 20.3 до 84.2 млн руб
              </p>
              <div className="complex-card__btn">
                <Btn href="/" title="Посмотреть предложения"></Btn>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="complex-card">
              <h3 className="complex-card__title">3-комнатные квартиры</h3>
              <p className="complex-card__info">
                <span className="complex-card__name">Площадь</span>
                от 59 до 120 м²
              </p>
              <p className="complex-card__info">
                <span className="complex-card__name">Стоимость</span>
                от 20.3 до 84.2 млн руб
              </p>
              <div className="complex-card__btn">
                <Btn href="/" title="Посмотреть предложения"></Btn>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
