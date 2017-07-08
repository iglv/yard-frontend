import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Hero from './Hero';
import Headline from './Headline';
import Card from './Card';

const Cards = styled.div`
  padding-bottom: 3rem;
`;

export default props =>
  <div>
    <Hero/>
    <Headline/>
    <Grid>
      <Cards>
        <Card location="SOUTH BEACH, SAN FRANCISCO" title="764 Metropolitan Avenue" description="The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments."/>
        <Card location="MIDTOWN EAST, MANHATTAN" title="100 East 53rd Street" description="One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned."/>
        <Card location="NOLITA, MANHATTAN" title="152 Elizabeth" description="152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood."/>
      </Cards>
    </Grid>
  </div>
;