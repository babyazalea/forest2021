import React, { useState, useContext } from "react";

import AdminContext from "../../context/admin-context";

import EditingContent from "../edit/EditingContent/EditingContent";
import ControlBox from "../ui/ControlBox/ControlBox";
import ErrorCircle from "../error/ErrorCircle";

import "./Content.css";

let emptyLines = [];

for (let i = 1; i < 18; i++) {
  emptyLines.push("");
}

const Content = (props) => {
  const [editMode, setEditMode] = useState(false);
  const adminContext = useContext(AdminContext);

  const editModeHandler = () => {
    setEditMode(true);
  };

  const unEditModeHandler = () => {
    setEditMode(false);
  };

  const editedContent = (newContentData) => {
    props.onEditedContent(newContentData);
    unEditModeHandler();
  };

  const editingPart = (
    <EditingContent
      data={props.editingData}
      sectionName={props.sectionName}
      unEditModeHandler={unEditModeHandler}
      editedContent={editedContent}
    />
  );

  return (
    <React.Fragment>
      <ul className="content-wrapper">
        <li></li>
        {adminContext.isLoggedIn ? (
          <li className="control-btns">
            <ControlBox
              isWriting={false}
              justEdit={props.isJustEdit}
              editModeHandler={editModeHandler}
            />
          </li>
        ) : null}
        <li></li>
        {(props.sectionName === "notice" || props.sectionName === "credits") &&
        !editMode ? (
          <React.Fragment>
            {props.contentData[props.sectionName].map((line, index) => (
              <li key={"text" + index}>
                <span>{line}</span>
              </li>
            ))}
            {emptyLines.map((emptyLine, index) => (
              <li key={"empty" + index}></li>
            ))}
          </React.Fragment>
        ) : null}
        {emptyLines.map((emptyLine, index) => (
          <li key={"empty" + index}></li>
        ))}
      </ul>
      {editMode ? editingPart : null}
      {props.error ? <ErrorCircle error={props.error} /> : null}
    </React.Fragment>
  );
};

export default Content;
