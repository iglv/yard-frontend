import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from '../Image';

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

const Location = styled.div`
  padding: 1.6rem 1.5rem;
  border-bottom: solid 1px #e0e0e1;
`;

const Address = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: .8rem;
`;

const Distance = styled.p`
  margin: 0;
  color: #a9afb6;
`;

const locations = [
  {
    name: 'Красный Октябрь',
    distance: '4 минуты, 6 км',
  },
  {
    name: 'Красный Октябрь',
    distance: '24 минуты, 6 км',
  },
  {
    name: 'Красный Октябрь',
    distance: '74 минуты, 6 км',
  },
];

export default () =>
  (<Grid>
    <MapStyled>
      <Row>
        <Col xs={6}>
          <ImageMap src={`${process.env.PUBLIC_URL}/img/map.png`} alt="Карта" />
        </Col>
        <Col xs={6}>
          <Locations>
            {locations.map(({ name, distance }) =>
              (<Location>
                <Address>
                  {name}
                </Address>
                <Distance>
                  {distance}
                </Distance>
              </Location>),
            )}
          </Locations>
        </Col>
      </Row>
    </MapStyled>
  </Grid>);
