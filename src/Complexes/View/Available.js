import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <Grid>
      <div className="compex-available">
        <div className="compex-available__item">
          <h2 className="compex-available__title">950 <small className="compex-available__subtitle">предложений</small></h2>
        </div>
        <div className="compex-available__item">
          <h2 className="compex-available__title">John McAslan + Partners <small className="compex-available__subtitle">архитектор</small></h2>
        </div>
        <div className="compex-available__item">
          <h2 className="compex-available__title">Группа «ПСН» <small className="compex-available__subtitle">застройщик</small></h2>
        </div>
      </div>
    </Grid>
  );
};
