import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from '../Image';

const Guide = styled.div`
  padding: 4rem 0 14rem;
  background-color: #3e4247;
`;

const Location = styled.div`
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

const LinkGuide = styled(Link)`
  text-decoration: none;
  color: #00779a;
`;

const ImageGuide = styled(Image)`
  height: 560px;
`;

export default function (props) {
  return (
    <Guide>
      <Grid>
        <Row>
          <Col xs={6}>
            <Location>{props.locality}</Location>
            <Title>
              Исторический центр Москвы в двух километрах&nbsp;от Кремля
            </Title>
            <LinkGuide to="/">Гид по {props.locality} →</LinkGuide>
          </Col>
          <Col xs={6}>
            <ImageGuide
              src={`${process.env.PUBLIC_URL}/img/polyanka-photo.png`}
              alt="Полянка"
            />
          </Col>
        </Row>
      </Grid>
    </Guide>
  );
}
