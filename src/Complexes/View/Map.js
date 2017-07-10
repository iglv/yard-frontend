import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import Image from "../Image";
import Sight from "./Sight";

const MapStyled = styled.div`
  margin-top: -10.3rem;
  padding-bottom: 3.5rem;
`;

const ImageMap = styled(Image)`
  height: 306px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, .5);
`;

const Locations = styled.div`
  background: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, .5);
`;

export default props =>
  <Grid>
    <MapStyled>
      <Row>
        <Col xs={6}>
          <ImageMap src="map.png" x2="map.png" x3="map.png" alt="Карта" />
        </Col>
        <Col xs={6}>
          <Locations>
            <Sight name="Красный Октябрь" distance="24 минуты, 6 км" />
            <Sight name="World Class" distance="2 минуты, 300 м" />
            <Sight name="Третьяковская галерея" distance="14 минут, 4 км" />
          </Locations>
        </Col>
      </Row>
    </MapStyled>
  </Grid>;
