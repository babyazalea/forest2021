import React from "react";
import ControlBox from "../UI/ControlBox/ControlBox";
import EditingContent from "./EditingContent/EditingContent";

const Edit = () => {
  return (
    <div className="editing">
      <ControlBox />
      <EditingContent />
    </div>
  );
};

export default Edit;
