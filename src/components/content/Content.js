import React, { useContext } from "react";

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
  const adminContext = useContext(AdminContext);

  const emptyLinesPart = emptyLines.map((emptyLine, index) => (
    <li key={"empty" + index}></li>
  ));

  let contentPart;
  if (
    props.contentData[props.sectionName].content &&
    !props.contentData[props.sectionName].editing &&
    (props.sectionName === "notice" || props.sectionName === "credits")
  ) {
    contentPart = props.contentData[props.sectionName].content.map(
      (line, index) => (
        <li key={"text" + index}>
          <span>{line}</span>
        </li>
      )
    );
  }

  let cardContentPart;
  if (
    props.contentData[props.sectionName].content &&
    (props.sectionName === "portfolios" || props.sectionName === "reading")
  ) {
    cardContentPart = (
      <CardContent
        addMode={props.contentData[props.sectionName].editing}
        sectionName={props.sectionName}
        contents={props.contentData[props.sectionName].content}
        editedContent={props.editedContent}
        cancelEditingHandler={props.cancelEditingHandler}
      />
    );
  }

  let editingPart;
  if (
    props.contentData[props.sectionName].editing &&
    (props.sectionName === "notice" || props.sectionName === "credits")
  ) {
    editingPart = (
      <div className="editing-content">
        <Form
          cancelEditingHandler={props.cancelEditingHandler}
          contentData={props.contentData[props.sectionName].content}
          sectionName={props.sectionName}
          editedContent={props.editedContent}
        />
      </div>
    );
  }

  let errorPart;
  if (props.contentData[props.sectionName].content === null) {
    errorPart = <ErrorCircle />;
  }

  return (
    <React.Fragment>
      <ul className="content-wrapper">
        <li></li>
        {adminContext.isLoggedIn ? (
          <li className="control-btns">
            <ControlBox
              sectionName={props.sectionName}
              editModeHandler={props.editModeHandler}
            />
          </li>
        ) : (
          <li></li>
        )}
        {contentPart}
        {emptyLinesPart}
      </ul>
      {cardContentPart}
      {editingPart}
      {errorPart}
    </React.Fragment>
  );
};

export default Content;
