import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Btn from '../Btn';

const Headline = styled.div`
  max-width: 50rem;
  margin: auto;
  padding-top: 4.2rem;
  padding-bottom: 4rem;
  text-align: center;
`;

const HeadlineTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding-bottom: .9rem;
  color: #3e4247;
`;

const HeadlineDescription = styled.p`
  line-height: 1.5;
  margin: 0;
  padding-bottom: 1rem;
  color: #3e4247;
`;


export default () => {
  return (
    <Grid>
      <Headline>
        <HeadlineTitle>Discover Our New Developments</HeadlineTitle>
        <HeadlineDescription>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</HeadlineDescription>
        <Btn href="/" title="Contact The Team"></Btn>
      </Headline>
    </Grid>
  );
};


