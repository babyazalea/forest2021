import React from "react";

import "./LoadingDots.css";

const LoadingDots = (props) => {
  return (
    <div className={`loading__dots ${props.customClassName}`}>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
};

export default LoadingDots;
