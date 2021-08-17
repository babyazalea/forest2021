import React from "react";

import "./ControlBox.css";

const ControlBox = (props) => {
  const newAndEdit = (
    <React.Fragment>
      {props.justEdit ? null : (
        <button>
          <i className="fas fa-plus"></i>
        </button>
      )}
      <button>
        <i className="fas fa-edit" onClick={props.editModeHandler}></i>
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
