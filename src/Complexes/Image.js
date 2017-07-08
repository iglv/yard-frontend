import React from "react";

const imagesPath = `${process.env.PUBLIC_URL}/img/`;

export default props => {
  return (
    <img
      className={props.className}
      src={imagesPath + props.src}
      srcSet={imagesPath + props.x2 + " 2x, " + imagesPath + props.x3 + " 3x"}
      alt={props.alt}
    />
  );
};