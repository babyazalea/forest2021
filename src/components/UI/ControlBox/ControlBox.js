import React, { useState } from "react";

import "./ControlBox.css";

const ControlBox = (props) => {
  // const [isWriting, setIsWriting] = useState(false);

  // const writingModeHandler = () => {
  //   setIsWriting(true);
  // };

  // const savingHandler = () => {
  //   setIsWriting(false);
  // };

  // const cancelHandler = () => {
  //   setIsWriting(false);
  // };

  const newAndEdit = (
    <React.Fragment>
      {props.justEdit ? null : (
        <button>
          <i className="fas fa-plus"></i>
        </button>
      )}
      <button>
        <i className="fas fa-edit"></i>
      </button>
    </React.Fragment>
  );

  const writeAndEdit = (
    <React.Fragment>
      <button>
        <i className="fas fa-save"></i>
      </button>
      <button>
        <i className="fas fa-times"></i>
      </button>
    </React.Fragment>
  );

  return (
    <div className="control-box">
      {props.isWriting ? writeAndEdit : newAndEdit}
    </div>
  );
};

export default ControlBox;
