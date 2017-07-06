import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Available extends Component {
  render() {
    return (
      <Grid>
        <div className="complex-spec">
          <h2 className="complex-spec__title">Характеристики</h2>
          <Row>
            <Col xs={2}>
              <dt className="complex-spec__name">Количество квартир</dt>
              <dt className="complex-spec__name">Статус</dt>
              <dt className="complex-spec__name">Цены</dt>
              <dt className="complex-spec__name">Безопасность</dt>
            </Col>
            <Col xs={2}>
              <dd className="complex-spec__data">1 503</dd>
              <dd className="complex-spec__data">Квартиры</dd>
              <dd className="complex-spec__data">от 5.3 до 143.5 млн</dd>
              <dd className="complex-spec__data">Охраняемая территория</dd>
            </Col>
            <Col xs={2}>
              <dt className="complex-spec__name">Конструкция корпусов</dt>
              <dt className="complex-spec__name">Площадь</dt>
              <dt className="complex-spec__name">Высота потолков</dt>             
              <dt className="complex-spec__name">Обслуживание</dt>             
            </Col>
            <Col xs={2}>
              <dd className="complex-spec__data">монолит</dd>
              <dd className="complex-spec__data">от 50 до 154 м²</dd>
              <dd className="complex-spec__data">3.45 − 5 м</dd>
              <dd className="complex-spec__data">1 200 руб / м² / месяц</dd>
            </Col>
            <Col xs={2}>
              <dt className="complex-spec__name">Начало строительства</dt>
              <dt className="complex-spec__name">Конец строительства</dt>
              <dt className="complex-spec__name">Наземная парковка</dt>             
              <dt className="complex-spec__name">Подземная парковка</dt>             
            </Col>
            <Col xs={2}>
              <dd className="complex-spec__data">I квартал 2012 года</dd>
              <dd className="complex-spec__data">IV квартал 2018 года</dd>
              <dd className="complex-spec__data">1 500 м/м</dd>
              <dd className="complex-spec__data">Нет</dd>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

export default Available;