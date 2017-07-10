import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

const Location = styled.div`
  padding: 1.6rem 1.5rem;
  border-bottom: solid 1px #e0e0e1;
`;

const Address = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: .8rem;
`;

const Distance = styled.p`
  margin: 0;
  color: #a9afb6;
`;

export default props =>
  <Location>
    <Address>
      {props.name}
    </Address>
    <Distance>
      {props.distance}
    </Distance>
  </Location>;
