import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <Grid>
      <div className="comlex-map">
        <Row>
          <Col xs={6}>
            <img className="comlex-map__map" src="/img/map@2x.png" />
          </Col>
          <Col xs={6}>
            <div className="comlex-map__list">
              <div className="comlex-map__item">
                <h3 className="comlex-map__name">Красный Октябрь</h3>
                <p className="comlex-map__desc">24 минуты, 6 км</p>
              </div>
              <div className="comlex-map__item">
                <h3 className="comlex-map__name">World class</h3>
                <p className="comlex-map__desc">24 минуты, 6 км</p>
              </div>
              <div className="comlex-map__item">
                <h3 className="comlex-map__name">Третьяковская галерея</h3>
                <p className="comlex-map__desc">24 минуты, 6 км</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Grid>
  );
};
