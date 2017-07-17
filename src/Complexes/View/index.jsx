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
import { get } from '../get';

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
    get(`complexes/${this.props.match.params.slug}`).then((complex) => {
      this.setState({ complex });
    });
  }

  render() {
    const {
      fullDescription,
      location = {},
      details = {},
      statistics = {},
      amenities = {},
    } =
      this.state.complex || {};

    return (
      <BodyClassName className="bg-white">
        <div>
          <Info
            title={this.state.complex.name}
            address={`${location.localityName}, ${location.subLocalityName}, ${location.street} ${location.house}, ${location.postalCode}`}
          />
          <Photos
            images={this.state.complex.images}
            caption={this.state.complex.name}
          />
          <Summary
            propertiesCount={statistics.propertiesCount}
            architect={details.architect}
            developer={details.developer}
          />
          <Special complex={this.state.complex} />
          {fullDescription &&
            <Description>
              {fullDescription}
            </Description>}
          {amenities.length > 0 &&
            <Infrastructure complex={this.state.complex} />}
          <Offers>
            <Grid>
              <Title>
                Предложения в {this.state.complex.name}
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
          <Guide subLocalityName={location.subLocalityName} />
          <Maps />
        </div>
      </BodyClassName>
    );
  }
}

export default Complex;
