import React from 'react';

export default () => {
  return (
    <div className="complex-guide">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="complex-guide__subtitle">Якиманка</div>
            <h2 className="complex-guide__title">Исторический центр Москвы в двух километрах&nbsp;от Кремля</h2>
            <a className="complex-guide__link" href="#">Гид по Якиманке →</a>
          </div>
          <div className="col-sm-6">
            <img className="complex-guide__photo" src="img/polyanka-photo.png" srcSet="img/polyanka-photo@3x.png 2x,
      img/polyanka-photo@3x.png 3x" />
          </div>
        </div>
      </div>
    </div>
  );
};
