import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

const LinkStyled = styled(Link)`
  font-weight: 300;
  display: inline-block;
  padding: .75rem 2rem;
  text-decoration: none;
  color: white;
  border-radius: 2px;
  background-color: #000;

  &:hover,
  &:active,
  &:focus {
    background-color: #414141;
  }
`;

const OfferStyled = styled.div`
  padding: 1.5rem 2rem;
  text-align: left;
  background: #fff;
`;

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 1.25rem;
  margin: 0;
  padding-bottom: 1.5rem;
`;

const Info = styled.p`
  margin: 0;
  padding-bottom: 1.8rem;
`;

const Name = styled.span`
  display: block;
  padding-bottom: .9rem;
  color: #a9afb6;
`;

const Btn = styled.div`
  padding-top: .4rem;
  text-align: center;
`;


export default props =>
  <OfferStyled>
    <Title>{props.room}-комнатные квартиры</Title>
    <Info>
      <Name>Площадь</Name>
      от 59 до 120 м²
    </Info>
    <Info>
      <Name>Стоимость</Name>
      от 20.3 до 84.2 млн руб
    </Info>
    <Btn>
      <LinkStyled to="/">Посмотреть предложения</LinkStyled>
    </Btn>
  </OfferStyled>
;