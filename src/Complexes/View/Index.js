import React, { Component } from "react";
import BodyClassName from "react-body-classname";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import Info from "./Info";
import Photos from "./Photos";
import Summary from "./Summary";
import Special from "./Special";
import Description from "./Description";
import Infrastructure from "./Infrastructure";
import Offer from "./Offer";
import Guide from "./Guide";
import Maps from "./Map";

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

const complexName = "Жилой комплекс «Полянка/44»";

export default props =>
  <BodyClassName className="bg-white">
    <div>
      <Info
        title={complexName}
        address="Район Якиманка, улица Большая Полянка, дом 44 • 119180"
      />
      <Photos />
      <Summary
        offers={950}
        architect="John McAslan + Partners"
        developer="Группа «ПСН»"
      />
      <Special />
      <Description />
      <Infrastructure />
      <Offers>
        <Grid>
          <Title>
            Предложения {complexName}
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
  </BodyClassName>;
