import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.3rem;
`;

const Title = styled.h1`
  font-family: 'Philosopher';
  font-size: 2rem;
  margin: 0;
`;

const Desc = styled.p`
  font-size: .875rem;
  font-weight: 300;
  line-height: 1.57;
  margin: 0;
  padding-top: .5rem;
  color: #a9afb6;
`;

const LinkFavorite = styled(Link)`
  font-size: .6rem;
  font-weight: 300;
  line-height: 1.0;
  align-self: flex-start;
  padding: .5rem 1rem;
  text-decoration: none;
  color: #00779a;
  border: solid 1px #e0e0e1;
  border-radius: 2px;
`;

export default props =>
  (<Grid>
    <Info>
      <div>
        <Title>
          {props.title}
        </Title>
        <Desc>
          {props.address}
        </Desc>
      </div>
      <LinkFavorite to="/">В избранное</LinkFavorite>
    </Info>
  </Grid>);
