import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Infrastructure = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  border-top: solid 1px #e0e0e1;
`;

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  margin: 0;
`;

export default function (props) {
  if (props.amenity) {
    return (
      <Grid>
        <Infrastructure>
          <Title>Инфраструктура</Title>
          <Row>
            {props.amenities.map(amenity =>
                (<Col lg={2}>
                  <p>{amenity}</p>
                </Col>),
              )}
          </Row>
        </Infrastructure>
      </Grid>
    );
  }
  return null;
}
