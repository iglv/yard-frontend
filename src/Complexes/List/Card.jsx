import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../Image';

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

const ImageComplex = styled(Image)`
  max-height: 352px;
  border: none;
  margin: 0;
  padding: 0;
`;

const CropImage = styled.div`
    display: inline-block;
    width: 491px;
    height: 352px;
    overflow: hidden;
`;

export default props =>
  (<Card to={`/complex/${props.id}`}>
    <CropImage>
      <ImageComplex src={`https://yard-images.s3.amazonaws.com/${props.image}-512`} alt={props.title} />
    </CropImage>
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
