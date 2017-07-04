import React from 'react';

export default () => {
  return (
    <a className="card" href="#">
      <div className="card__img">
        <img src="img/cards/bitmap.png" srcSet="img/cards/bitmap@2x.png 2x, img/cards/bitmap@3x.png 3x" />
      </div>
      <div className="card__info">
        <div className="card__subtitle">
          SOUTH BEACH, SAN FRANCISCO
        </div>
        <div className="card__title">
          764 Metropolitan Avenue
        </div>
        <p className="card__description">
          The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.
        </p>
      </div>
    </a>
  );
};
