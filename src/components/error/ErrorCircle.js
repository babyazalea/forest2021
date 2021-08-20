import React from "react";

import "./ErrorCircle.css";

const ErrorCircle = (props) => {
  return (
    <div className="error-circle">
      <span className="error-circle-exclamation">
        <i className="fas fa-exclamation"></i>
      </span>
      <span className="error-circle-message">
        일시적인 오류로 인해 불러오지 못했습니다. 나중에 다시 시도해주세요.
      </span>
    </div>
  );
};

export default ErrorCircle;
