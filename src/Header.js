import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import logo from './img/compass-logo.svg';

const Header = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eaebf0;
  background-color: #fff;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: .3rem;
`;
const Links = styled.nav`
  padding-top: .4rem;
  padding-bottom: .4rem;
  text-align: right;
`;
const Url = styled(Link)`
  padding-left: 2rem;
  text-decoration: none;
  color: #3e4247;
`;

export default () => (
  <Header>
    <Grid>
      <Wrap>
        <Link to="/"><img src={logo} alt="Logo" height={24} /></Link>
        <Links>
          <Url to="/">Купить</Url>
          <Url to="/">Снять</Url>
          <Url to="/">Наши агенты</Url>
        </Links>
      </Wrap>
    </Grid>
  </Header>
  );
