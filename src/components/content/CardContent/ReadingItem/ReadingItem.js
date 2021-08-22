import React from "react";

import "./ReadingItem.css";

const ReadingItem = (props) => {
  return (
    <div
      className="reading-item"
      style={{ backgroundImage: `url(${props.reading.backgroundUrl})` }}
    >
      <span>{props.reading.title}</span>
    </div>
  );
};

export default ReadingItem;
