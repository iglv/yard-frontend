import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { securityKinds, constructionKinds, quarters } from './Dictionaries';

const Special = styled.div`padding: 2rem 0;`;

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
  margin: 0;
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
  font-weight: 500;
`;

function formatNum(num) {
  if (num) {
    return Math.floor(num).toFixed(2);
  }
  return null;
}

function checkParking(parkingData) {
  if (parkingData) {
    return `${parkingData} м/м`;
  }
  return 'Нет';
}

export default function (props) {
  const {
    details = {},
    details: {
      ceilHeight: { from: ceilHeightFrom, to: ceilHeightTo } = {},
    } = {},
    statistics: {
      price: { from: { rub: priceFrom } = {}, to: { rub: priceTo } = {} } = {},
      totalPrimaryArea: {
        from: totalPrimaryAreaFrom,
        to: totalPrimaryAreaTo,
      } = {},
    } = {},
  } =
    props.complex || {};

  return (
    <Grid>
      <Special>
        <Title>Характеристики</Title>
        <Row>
          <Col xs={4}>
            <Wrap>
              {details.units &&
                <div>
                  <Name>Количество квартир</Name>
                  <Data>
                    {details.units}
                  </Data>
                </div>}

              {details.status &&
                <div>
                  <Name>Статус</Name>
                  <Data>
                    {details.status}
                  </Data>
                </div>}

              <Name>Цены</Name>
              <Data>
                От {Math.floor(priceFrom / 10000) / 100} до&nbsp;
                {Math.floor(priceTo / 10000) / 100} млн
              </Data>

              <Name>Безопасность</Name>
              <Data>
                {securityKinds[details.security]}
              </Data>
            </Wrap>
          </Col>
          <Col xs={4}>
            <Wrap>
              <Name>Конструкция корпусов</Name>
              <Data>
                {constructionKinds[details.constructionKind]}
              </Data>

              <Name>Площадь</Name>
              <Data>
                От {formatNum(totalPrimaryAreaFrom)} до&nbsp;
                {formatNum(totalPrimaryAreaTo)} м²
              </Data>

              <Name>Высота потолков</Name>
              <Data>
                {formatNum(ceilHeightFrom)} -&nbsp;
                {formatNum(ceilHeightTo)} м
              </Data>

              <Name>Обслуживание</Name>
              <Data>
                {details.maintenanceCosts} руб / м² / месяц
              </Data>
            </Wrap>
          </Col>
          <Col xs={4}>
            <Wrap>
              <Name>Начало строительства</Name>
              <Data>
                {quarters[details.startQuarter]} квартал&nbsp;
                {details.startYear} года
              </Data>

              <Name>Конец строительства</Name>
              <Data>
                {quarters[details.commissioningQuarter]} квартал&nbsp;
                {details.commissioningYear} года
              </Data>

              <Name>Наземная парковка</Name>
              <Data>
                {checkParking(details.parking)}
              </Data>

              <Name>Подземная парковка</Name>
              <Data>
                {checkParking(details.undergroundGarages)}
              </Data>
            </Wrap>
          </Col>
        </Row>
      </Special>
    </Grid>
  );
}
