import React from "react";

import "./ControlBox.css";

const ControlBox = (props) => {
  const newAndEdit = (
    <React.Fragment>
      <button onClick={props.logging}>loggin</button>
      <button onClick={() => props.editModeHandler(props.sectionName)}>
        {props.sectionName === "notice" || props.sectionName === "credits" ? (
          <i className="fas fa-edit"></i>
        ) : (
          <i className="fas fa-plus"></i>
        )}
      </button>
    </React.Fragment>
  );

  return <div className="control-box">{newAndEdit}</div>;
};

export default ControlBox;
