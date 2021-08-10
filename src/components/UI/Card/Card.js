import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className={props.onLegalPad ? "card on-legal-pad" : "card"}>
      {props.children}
    </div>
  );
};

export default Card;
