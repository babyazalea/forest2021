import React, { useState, useContext } from "react";

import AdminContext from "../../context/admin-context";

import Form from "../ui/Form/Form";
import ControlBox from "../ui/ControlBox/ControlBox";
import CardContent from "./CardContent/CardContent";
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

  const emptyLinesPart = emptyLines.map((emptyLine, index) => (
    <li key={"empty" + index}></li>
  ));

  const editingPart = (
    <div className="editing-content">
      <Form
        contentData={props.contentData[props.sectionName]}
        sectionName={props.sectionName}
        unEditModeHandler={unEditModeHandler}
        editedContent={props.editedContent}
      />
    </div>
  );

  let errorPart;
  if (!editMode) {
    errorPart = <ErrorCircle />;
  }

  return (
    <React.Fragment>
      <ul className="content-wrapper">
        <li></li>
        {adminContext.isLoggedIn ? (
          <li className="control-btns">
            <ControlBox
              isWriting={false}
              sectionName={props.sectionName}
              editModeHandler={editModeHandler}
            />
          </li>
        ) : null}
        <li></li>
        {props.contentData[props.sectionName] !== null && !editMode ? (
          <React.Fragment>
            {props.sectionName === "notice" ||
            props.sectionName === "credits" ? (
              props.contentData[props.sectionName].map((line, index) => (
                <li key={"text" + index}>
                  <span>{line}</span>
                </li>
              ))
            ) : (
              <CardContent
                sectionName={props.sectionName}
                contents={props.contentData[props.sectionName]}
              />
            )}
          </React.Fragment>
        ) : (
          errorPart
        )}
        {emptyLinesPart}
      </ul>
      {editMode ? editingPart : null}
    </React.Fragment>
  );
};

export default Content;
