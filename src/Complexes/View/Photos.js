import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <div className="complex-photos">
      <div className="complex-photos__wrap">
        <img src="img/photos/1.jpg" alt="Photo" />
        <img src="img/photos/2.jpg" alt="Photo" />
        <img src="img/photos/3.jpg" alt="Photo" />
        <img src="img/photos/4.jpg" alt="Photo" />
        <img src="img/photos/2.jpg" alt="Photo" />
      </div>
      <Grid>
        <a href="#" className="complex-photos__info">41 фотография</a>
      </Grid>
    </div>
  );
};
