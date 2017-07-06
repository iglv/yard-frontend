import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'




class Card extends Component {
  render() {
    return (
      <Link className="card" to="/сomplex">
        <div className="card__img">
          <img src="img/cards/bitmap.png" srcSet="img/cards/bitmap@2x.png 2x, img/cards/bitmap@3x.png 3x" />
        </div>
        <div className="card__info">
          <div className="card__subtitle">
            {this.props.location}
          </div>
          <div className="card__title">
            {this.props.title}
          </div>
          <p className="card__description">
            {this.props.description}
          </p>
        </div>
      </Link>
    );
  }
}

export default Card;