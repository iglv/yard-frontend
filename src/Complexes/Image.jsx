import React from 'react';

export default props => (
  <img
    className={props.className}
    src={props.src}
    srcSet={`${props.src2x} 2x, ${props.src3x} 3x`}
    alt={props.alt}
  />
  );
