import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Hero = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  background: #161616;
`;

export default () => {
  return (
    <Hero>
      <Grid>
        <img src="img/compass-development-logo.svg" alt="Development" />
      </Grid>
    </Hero>
  );
};
