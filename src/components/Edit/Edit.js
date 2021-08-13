import React from "react";
import EditingControl from "./EditControl/EditControl";
import EditingContent from "./EditingContent/EditingContent";

const Edit = () => {
  return (
    <div className="editing">
      <EditingControl />
      <EditingContent />
    </div>
  );
};

export default Edit;
