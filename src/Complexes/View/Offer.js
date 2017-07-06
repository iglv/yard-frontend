import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Btn from '../Btn';

class Offer extends Component {
  render() {
    return (
      <div className="complex-card">
        <h3 className="complex-card__title">{this.props.room}-комнатные квартиры</h3>
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
    );
  }
}

export default Offer;