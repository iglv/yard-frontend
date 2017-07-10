import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import imgArrow from "./img/combined-shape.svg";

const Footer = styled.footer`
  font-size: .9rem;
  padding: 2.15rem 0;
  color: #a9afb6;
  background-color: #111;
`;

const Heading = styled.h4`
  margin: 0;
  padding-bottom: .5rem;
`;

const HeadingBorder = styled.h4`
  padding-top: 1.1rem;
  padding-bottom: .1rem;
  border-top: 3px solid #3e4247;
`;

const Text = styled.p`
  font-size: .6rem;
  margin: 0;
  padding-top: 6rem;
`;
const Info  = styled.p`
  margin: 0;
  padding-top: .5rem;
  padding-bottom: .5rem;
`;
const Url  = styled(Link)`
  display: block;
  padding-top: .9rem;
  padding-bottom: 0rem;
  text-decoration: none;
  color: #fff;

  &:hover,
  &:active,
  &:focus {
    text-decoration: underline;
  }
`;
const UrlArrow  = styled(Url)`
  padding-top: 1.2rem;
`;


export default () => {
  return (
      <Footer>
        <Grid>
          <Row>
            <Col xs={4}>
              <Heading>ООО «Ярд»</Heading>
              <Info>ОГРН 1175074002531</Info>
              <Info>ИНН 5036165365</Info>
              <Info>+7 (999) 821-14-88</Info>
            </Col>
            <Col xs={2}>
              <HeadingBorder>Жилые комплексы</HeadingBorder>
              <nav>
                <Url to="/">ВТБ Арена Парк</Url>
                <Url to="/">Садовые кварталы</Url>
                <Url to="/">Резиденция Монэ</Url>
                <UrlArrow to="/">Все ЖК Москвы <img src={imgArrow} alt="Arrow" /></UrlArrow>
              </nav>
            </Col>
            <Col xs={2}>
              <HeadingBorder>Компания</HeadingBorder>
              <nav>
                <Url to="/">Команда</Url>
                <Url to="/">О компании</Url>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col xs={8} xsOffset={4}>
              <Text>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</Text>
            </Col>
          </Row>
        </Grid>
      </Footer>
  );
};
