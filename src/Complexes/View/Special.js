import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

const SpecialStyled = styled.div`
  padding-top: 2rem;
`;

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 1.2rem;
`;

const Wrap = styled.dl`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Name = styled.dt`
  width: 50%;
  margin: 0;
  padding-bottom: .9rem;
  color: #a9afb6;
`;

const Data = styled.dd`
  font-weight: 500;
  width: 50%;
  margin: 0;
  padding-bottom: .9rem;
`;


class Special extends Component {
  render() {
    return (
      <Grid>
        <SpecialStyled>
          <Title>Характеристики</Title>
          <Row>
            <Col xs={4}>
              <Wrap>
                <Name>Количество квартир</Name>
                <Data>1 503</Data>

                <Name>Статус</Name>
                <Data>Квартиры</Data>

                <Name>Цены</Name>
                <Data>от 5.3 до 143.5 млн</Data>

                <Name>Безопасность</Name>
                <Data>Охраняемая территория</Data>
              </Wrap>
            </Col>
            <Col xs={4}>
              <Wrap>
                <Name>Конструкция корпусов</Name>
                <Data>монолит</Data>

                <Name>Площадь</Name>
                <Data>от 50 до 154 м²</Data>

                <Name>Высота потолков</Name>
                <Data>3.45 − 5 м</Data>

                <Name>Обслуживание</Name>
                <Data>1 200 руб / м² / месяц</Data>
              </Wrap>
            </Col>
            <Col xs={4}>
              <Wrap>
                <Name>Начало строительства</Name>
                <Data>I квартал 2012 года</Data>

                <Name>Конец строительства</Name>
                <Data>IV квартал 2018 года</Data>

                <Name>Наземная парковка</Name>
                <Data>1 500 м/м</Data>

                <Name>Подземная парковка</Name>
                <Data>Нет</Data>
              </Wrap>
            </Col>
          </Row>
        </SpecialStyled>
      </Grid>
    );
  }
}

export default Special;