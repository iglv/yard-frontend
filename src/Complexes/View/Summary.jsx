import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Summary = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 1.5rem;
  padding-bottom: 1.8rem;
  border-bottom: solid 1px #e0e0e1;
`;

const Property = styled.div`padding-right: 3rem;`;

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  margin: 0;
`;

const Subtitle = styled.small`
  font-family: 'Fira Sans';
  font-size: .875rem;
  font-weight: 300;
  display: block;
  padding-top: .75rem;
  color: #a9afb6;
`;

export default props =>
  (<Grid>
    <Summary>
      <Property>
        <Title>
          {props.offers || '—'} <Subtitle>предложений</Subtitle>
        </Title>
      </Property>
      <Property>
        <Title>
          {props.architect || '—'} <Subtitle>архитектор</Subtitle>
        </Title>
      </Property>
      <Property>
        <Title>
          {props.developer || '—'} <Subtitle>застройщик</Subtitle>
        </Title>
      </Property>
    </Summary>
  </Grid>);
