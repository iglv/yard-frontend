import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Available extends Component {
  render() {
    return (
      <Grid>
        <div className="complex-spec">
          <h2 className="complex-spec__title">Характеристики</h2>
          <Row>
            <Col xs={4}>
              <dl className="complex-spec__wrap">
                <dt className="complex-spec__name">Количество квартир</dt>
                <dd className="complex-spec__data">1 503</dd>

                <dt className="complex-spec__name">Статус</dt>
                <dd className="complex-spec__data">Квартиры</dd>

                <dt className="complex-spec__name">Цены</dt>
                <dd className="complex-spec__data">от 5.3 до 143.5 млн</dd>

                <dt className="complex-spec__name">Безопасность</dt>
                <dd className="complex-spec__data">Охраняемая территория</dd>
              </dl>
            </Col>
            <Col xs={4}>
              <dl className="complex-spec__wrap">
                <dt className="complex-spec__name">Конструкция корпусов</dt>
                <dd className="complex-spec__data">монолит</dd>

                <dt className="complex-spec__name">Площадь</dt>
                <dd className="complex-spec__data">от 50 до 154 м²</dd>

                <dt className="complex-spec__name">Высота потолков</dt>
                <dd className="complex-spec__data">3.45 − 5 м</dd>

                <dt className="complex-spec__name">Обслуживание</dt>
                <dd className="complex-spec__data">1 200 руб / м² / месяц</dd>
              </dl>
            </Col>
            <Col xs={4}>
              <dl className="complex-spec__wrap">
                <dt className="complex-spec__name">Начало строительства</dt>
                <dd className="complex-spec__data">I квартал 2012 года</dd>

                <dt className="complex-spec__name">Конец строительства</dt>
                <dd className="complex-spec__data">IV квартал 2018 года</dd>

                <dt className="complex-spec__name">Наземная парковка</dt>
                <dd className="complex-spec__data">1 500 м/м</dd>

                <dt className="complex-spec__name">Подземная парковка</dt>
                <dd className="complex-spec__data">Нет</dd>
              </dl>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

export default Available;