import React from "react";

export default props => {
  return (
    <img
      className={props.className}
      src={props.src}
      srcSet={props.src + " 2x, " + props.src + " 3x"}
      alt={props.alt}
    />
  );
};
