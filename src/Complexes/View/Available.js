import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Available extends Component {
  render() {
    return (
      <Grid>
        <div className="compex-available">
          <div className="compex-available__item">
            <h2 className="compex-available__title">{this.props.sentences} <small className="compex-available__subtitle">предложений</small></h2>
          </div>
          <div className="compex-available__item">
            <h2 className="compex-available__title">{this.props.architect} <small className="compex-available__subtitle">архитектор</small></h2>
          </div>
          <div className="compex-available__item">
            <h2 className="compex-available__title">{this.props.developer} <small className="compex-available__subtitle">застройщик</small></h2>
          </div>
        </div>
      </Grid>
    );
  }
}

export default Available;