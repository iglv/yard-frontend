import React from 'react';

export default () => {
  return (
    <div className="container">
      <div className="complex-info">
        <div className="complex-info__main">
          <h1 className="complex-info__title">
            Жилой комплекс «Полянка/44»
          </h1>
          <p className="complex-info__desc">
            Район Якиманка, улица Большая Полянка, дом 44 • 119180
          </p>
        </div>
        <a href="#" className="complex-info__favorite">В избранное</a>
      </div>
    </div>
  );
};
