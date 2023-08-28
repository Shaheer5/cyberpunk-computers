import React from "react";

// styles
import './Image.css'

const Image = ({ imgSrc, className }) => {
  return <img className={className} src={imgSrc} alt={imgSrc} />;
};

export default Image;
