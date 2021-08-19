import React from "react";

import Form from "../../ui/Form/Form";

import "./EditingContent.css";

const EditingContent = (props) => {
  return (
    <div className="editing-content">
      <Form
        content={props.data}
        sectionName={props.sectionName}
        unEditModeHandler={props.unEditModeHandler}
      />
    </div>
  );
};

export default EditingContent;
