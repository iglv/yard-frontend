import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Desc extends Component {
  render() {
    const children = React.Children.toArray(this.props.children)
    return (
      <Grid>
        <div className="complex-desc">
          <Row>
            <Col xs={2}>
              <h2 className="complex-desc__title">Описание</h2>
            </Col>
            <Col xs={10}>
              <div className="complex-desc__content">{children.sort().join(' ')}</div>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

export default Desc;