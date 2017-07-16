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
              {details.units &&
                <div>
                  <Name>Количество квартир</Name>
                  <Data>{details.units}</Data>
                </div>
              }


              {details.status &&
                <div>
                  <Name>Статус</Name>
                  <Data>{details.status}</Data>
                </div>
              }

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
                От {Math.floor(totalPrimaryArea.from).toFixed(1)} до&nbsp;
                {Math.floor(totalPrimaryArea.to).toFixed(1)} м²
              </Data>

              <Name>Высота потолков</Name>
              <Data>
                {Math.floor(ceilHeight.from).toFixed(2)} -&nbsp;
                {Math.floor(ceilHeight.to).toFixed(2)} м
              </Data>

              <Name>Обслуживание</Name>
              <Data>{details.maintenanceCosts} руб / м² / месяц</Data>
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
