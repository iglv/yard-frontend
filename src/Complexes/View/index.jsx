import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Info from './Info';
import Photos from './Photos';
import Summary from './Summary';
import Special from './Special';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offer from './Offer';
import Guide from './Guide';
import Maps from './Map';

const Offers = styled.div`
  padding: 4rem 0;
  text-align: center;
  background-color: #f4f5f9;
`;
const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 1.5rem;
`;

class Complex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complex: {},
    };
  }

  componentDidMount() {
    const url = `https://yard.moscow/api/v1/complexes/${this.props.match.params.slug}`;

    fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((data) => {
      this.setState({
        complex: data,
      });
    });
  }

  render() {
    const location = this.state.complex.location || {};
    const details = this.state.complex.details || {};
    const statistics = this.state.complex.statistics || {};
    const description = this.state.complex.description || 'Not found';
    const amenities = this.state.complex.amenities || {};

    return (
      <BodyClassName className="bg-white">
        <div>
          <Info
            title={this.state.complex.name}
            address={`${location.subLocalityName}, ${location.street} ${location.house}`}
          />
          <Photos images={this.state.complex.images} />
          <Summary
            offers={statistics.propertiesCount}
            architect={details.architect}
            developer={details.developer}
          />
          <Special complex={this.state.complex} />
          <Description>{description}</Description>
          <Infrastructure complex={amenities} />
          <Offers>
            <Grid>
              <Title>
                  Предложения
              </Title>
              <Row>
                <Col xs={4}>
                  <Offer
                    title="1-комнатные квартиры"
                    space={{ min: 59, max: 120 }}
                    price={{ min: 20.3, max: 84.2 }}
                  />
                </Col>
                <Col xs={4}>
                  <Offer
                    title="2-комнатные квартиры"
                    space={{ min: 59, max: 120 }}
                    price={{ min: 20.3, max: 84.2 }}
                  />
                </Col>
                <Col xs={4}>
                  <Offer
                    title="3-комнатные квартиры"
                    space={{ min: 59, max: 120 }}
                    price={{ min: 20.3, max: 84.2 }}
                  />
                </Col>
              </Row>
            </Grid>
          </Offers>
          <Guide />
          <Maps />
        </div>
      </BodyClassName>
    );
  }
}

export default Complex;
