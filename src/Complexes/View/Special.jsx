import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { securityKinds, constructionKinds, quarters } from './Dictionaries';

const Special = styled.div`padding-top: 2rem;`;

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

export default function (props) {
  const statistics = props.complex.statistics || {};
  const totalPrimaryArea = statistics.totalPrimaryArea || {};
  const price = statistics.price || {};
  const priceFrom = price.from || {};
  const priceTo = price.to || {};
  const details = props.complex.details || {};
  const ceilHeight = details.ceilHeight || {};

  return (
    <Grid>
      <Special>
        <Title>Характеристики</Title>
        <Row>
          <Col xs={4}>
            <Wrap>
              <Name>Количество квартир</Name>
              <Data>{statistics.propertiesCount}</Data>

              <Name>Статус</Name>
              <Data>{details.status}</Data>

              <Name>Цены</Name>
              <Data>
                От {Math.floor(priceFrom.rub / 10000) / 100} до&nbsp;
                {Math.floor(priceTo.rub / 10000) / 100} млн
              </Data>

              <Name>Безопасность</Name>
              <Data>{securityKinds[details.security]}</Data>
            </Wrap>
          </Col>
          <Col xs={4}>
            <Wrap>
              <Name>Конструкция корпусов</Name>
              <Data>{constructionKinds[details.constructionKind]}</Data>

              <Name>Площадь</Name>
              <Data>
                От {Math.floor(totalPrimaryArea.from * 100) / 100} до&nbsp;
                {Math.floor(totalPrimaryArea.to * 100) / 100} м²
              </Data>

              <Name>Высота потолков</Name>
              <Data>
                {Math.floor(ceilHeight.from * 100) / 100} -&nbsp;
                {Math.floor(ceilHeight.to * 100) / 100} м
              </Data>

              <Name>Обслуживание</Name>
              <Data>{details.maintenanceCosts} руб / м² / месяц</Data>
            </Wrap>
          </Col>
          <Col xs={4}>
            <Wrap>
              <Name>Начало строительства</Name>
              <Data>
                {details.startYear} года
                {quarters[details.startQuarter]} квартал
              </Data>

              <Name>Конец строительства</Name>
              <Data>
                {details.commissioningYear} года
                {quarters[details.commissioningQuarter]} квартал
              </Data>

              <Name>Наземная парковка</Name>
              <Data>
                {details.parking === undefined && 'Нет'}
                {details.parking > 0 && `${details.parking} м/м`}
              </Data>

              <Name>Подземная парковка</Name>
              <Data>
                {details.undergroundGarages === undefined && 'Нет'}
                {details.undergroundGarages > 0 && `${details.undergroundGarages} м/м`}
              </Data>
            </Wrap>
          </Col>
        </Row>
      </Special>
    </Grid>
  );
}
