import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  background: #161616;
`;

export default () => {
  return (
    <Hero>
      <div className="container">
        <img src="img/compass-development-logo.svg" alt="Development" />
      </div>
    </Hero>
  );
};
