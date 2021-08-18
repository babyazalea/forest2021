import React, { useContext, useState } from "react";

import AdminContext from "../../context/admin-context";

import EditingContent from "../edit/EditingContent/EditingContent";
import ControlBox from "../ui/ControlBox/ControlBox";

import "./Content.css";

const Content = (props) => {
  const [editMode, setEditMode] = useState(false);
  const adminContext = useContext(AdminContext);

  // min length for list: 20
  let transformedArray;
  let emptyLines = [];

  if (props.content) {
    transformedArray = props.content.split("<br/>");
  }

  if (transformedArray && transformedArray.length < 20) {
    const count = 20 - transformedArray.length;
    for (let i = 1; i < count; i++) {
      emptyLines.push("");
    }
  } else {
    for (let i = 1; i < 20; i++) {
      emptyLines.push("");
    }
  }

  const editModeHandler = () => {
    setEditMode(true);
  };

  const editingPart = (
    <EditingContent
      data={props.content}
      isPortFolio={props.portfolios ? true : false}
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
        ) : (
          <li></li>
        )}
        {transformedArray && !editMode
          ? transformedArray.map((line, index) => (
              <li key={"text" + index}>
                <span>{line}</span>
              </li>
            ))
          : null}
        {emptyLines.map((emptyLine, index) => (
          <li key={"empty" + index}></li>
        ))}
      </ul>
      {editMode ? editingPart : null}
      {props.children}
    </React.Fragment>
  );
};

export default Content;
