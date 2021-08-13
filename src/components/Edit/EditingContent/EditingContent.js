import React from "react";

import Form from "../../ui/Form/Form";

const EditingContent = (props) => {
  return (
    <div className="editing-content">
      <Form isPortFolio={props.isPortFolio} data={props.data} />
    </div>
  );
};

export default EditingContent;
