import React from 'react';

export default () => {
  return (
    <div className="container">
      <div className="comlex-map">
        <div className="row">
          <div className="col-sm-6">
            <img className="comlex-map__map" src="/img/map@2x.png" />
          </div>
          <div className="col-sm-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};
