import React from "react";

const imagesPath = `${process.env.PUBLIC_URL}/img/`;

export default props => {
  return (
    <img
      className={props.className}
      src={imagesPath + props.src}
      srcSet={imagesPath + props.src + " 2x, " + imagesPath + props.src + " 3x"}
      alt={props.alt}
    />
  );
};
