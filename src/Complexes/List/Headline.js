import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

const Headline = styled.div`
  max-width: 50rem;
  margin: auto;
  padding-top: 4.2rem;
  padding-bottom: 4rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding-bottom: .9rem;
  color: #3e4247;
`;

const Description = styled.p`
  line-height: 1.5;
  margin: 0;
  padding-bottom: 1rem;
  color: #3e4247;
`;

const LinkStyled = styled(Link)`
  font-weight: 300;
  display: inline-block;
  padding: .75rem 2rem;
  text-decoration: none;
  color: white;
  border-radius: 2px;
  background-color: #000;

  &:hover,
  &:active,
  &:focus {
    background-color: #414141;
  }
`;

export default () => {
  return (
    <Grid>
      <Headline>
        <Title>Discover Our New Developments</Title>
        <Description>
          Compass brings a modern approach to new development marketing and
          sales. From boutique rental conversions to luxurious ground-up
          condominiums, browse our portfolio of current offerings.
        </Description>
        <LinkStyled to="/">Contact The Team</LinkStyled>
      </Headline>
    </Grid>
  );
};
