import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Hero from './Hero';
import Headline from './Headline';
import Cards from './Cards';


export default() =>
  (<div>
    <Hero />
    <Headline />
    <Grid>
      <Cards />
    </Grid>
  </div>);
