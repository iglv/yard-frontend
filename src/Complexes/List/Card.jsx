import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: flex;
  height: 21.8rem;
  margin-bottom: 3rem;
  transition: .3s ease-in;
  text-decoration: none;
  color: #3e4247;
  border-bottom: 3px solid #646971;
  background-color: #fff;

  &:hover,
  &:active,
  &:focus {
    transition: .3s ease-in;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .3);
  }
`;

const Info = styled.div`
  padding-top: 1.5rem;
  padding-right: 2rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
`;

const Location = styled.p`
  font-family: Menlo;
  padding-bottom: 1.5rem;
  text-transform: uppercase;
  color: #646971;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.4;
  margin: 0;
  padding-bottom: .5rem;
  color: #000;
`;

const Description = styled.p`
  line-height: 1.5;
  margin: 0;
`;

export default props =>
  (<Card to="/сomplex">
    <div>
      <img
        src="img/cards/bitmap.png"
        srcSet="img/cards/bitmap@2x.png 2x, img/cards/bitmap@3x.png 3x"
        alt="Img"
      />
    </div>
    <Info>
      <Location>
        {props.location}
      </Location>
      <Title>
        {props.title}
      </Title>
      <Description>
        {props.children}
      </Description>
    </Info>
  </Card>);
