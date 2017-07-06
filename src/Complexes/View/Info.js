import React, {Component} from 'react';

class Info extends Component {
  render() {
    return (
      <div className="container">
        <div className="complex-info">
          <div className="complex-info__main">
            <h1 className="complex-info__title">
              {this.props.title}
            </h1>
            <p className="complex-info__desc">
              {this.props.address}
            </p>
          </div>
          <a href="#" className="complex-info__favorite">В избранное</a>
        </div>
      </div>
    );
  }
}

export default Info;
