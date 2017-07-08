import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Guide = styled.div`
  padding: 4rem 0 14rem;
  background-color: #3e4247;
`;

const Subtitle = styled.div`
  font-family: 'Philosopher';
  font-size: 1.55rem;
  margin: 0;
  padding-top: 7.4rem;
  padding-bottom: 3rem;
  color: #a9afb6;
`;

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 3rem;
  line-height: 1.25;
  margin: 0;
  padding-bottom: 3rem;
  color: #fff;
`;

const Url = styled(Link)`
  text-decoration: none;
  color: #00779a;
`;



export default () => {
  return (
    <Guide>
      <Grid>
        <Row>
          <Col xs={6}>
            <Subtitle>Якиманка</Subtitle>
            <Title>Исторический центр Москвы в двух километрах&nbsp;от Кремля</Title>
            <Url to="/">Гид по Якиманке →</Url>
          </Col>
          <Col xs={6}>
            <img src="img/polyanka-photo.png" srcSet="img/polyanka-photo@3x.png 2x,  img/polyanka-photo@3x.png 3x" height={560} />
          </Col>
        </Row>
      </Grid>
    </Guide>
  );
};
