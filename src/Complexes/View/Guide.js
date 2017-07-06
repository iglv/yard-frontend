import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <div className="complex-guide">
      <Grid>
        <Row>
          <Col xs={6}>
            <div className="complex-guide__subtitle">Якиманка</div>
            <h2 className="complex-guide__title">Исторический центр Москвы в двух километрах&nbsp;от Кремля</h2>
            <a className="complex-guide__link" href="#">Гид по Якиманке →</a>
          </Col>
          <Col xs={6}>
            <img className="complex-guide__photo" src="img/polyanka-photo.png" srcSet="img/polyanka-photo@3x.png 2x,
      img/polyanka-photo@3x.png 3x" />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
