import React, { useContext, useEffect, useState } from "react";

import AdminContext from "../../context/admin-context";
import { useHttp } from "../../hooks/http-hooks";

import LoadingDots from "../ui/LoadingDots/LoadingDots";
import EditingContent from "../edit/EditingContent/EditingContent";
import ControlBox from "../ui/ControlBox/ControlBox";
import ErrorCircle from "../error/ErrorCircle";

import "./Content.css";

const Content = (props) => {
  const [contentData, setContentData] = useState({
    notice: null,
    portfolios: null,
    reading: null,
    credits: null,
  });
  const [editingData, setEditingData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const adminContext = useContext(AdminContext);

  const { isLoading, error, sendGetRequest } = useHttp();

  useEffect(() => {
    const fetchingData = async () => {
      const sectionName = props.sectionName;

      const url = `https://forest2021-a1e4c-default-rtdb.firebaseio.com/${sectionName}.json`;

      try {
        const responseData = await sendGetRequest(url);

        if (sectionName === "notice" || sectionName === "credits") {
          const text = responseData.description;
          setEditingData(text);
          const newContentData = text.split("\n");
          setContentData((prevContentData) => {
            return {
              ...prevContentData,
              [sectionName]: newContentData,
            };
          });
        }
      } catch (err) {}
    };

    fetchingData();
  }, [sendGetRequest, props.sectionName]);

  const logging = () => {
    console.log(contentData);
  };

  // min length for list: 20
  let emptyLines = [];

  if (contentData && contentData.length < 20) {
    const count = 20 - contentData.length;
    for (let i = 1; i < count; i++) {
      emptyLines.push("");
    }
  } else {
    for (let i = 1; i < 18; i++) {
      emptyLines.push("");
    }
  }

  const editModeHandler = () => {
    setEditMode(true);
  };

  const unEditModeHandler = () => {
    setEditMode(false);
  };

  const editedContent = (ct) => {
    setContentData(ct);
    unEditModeHandler();
  };

  const editingPart = (
    <EditingContent
      data={editingData}
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
              logging={logging}
              isWriting={false}
              justEdit={props.isJustEdit}
              editModeHandler={editModeHandler}
            />
          </li>
        ) : (
          <li></li>
        )}
        {isLoading ? (
          <LoadingDots />
        ) : (
          <React.Fragment>
            {(contentData.notice || contentData.credits) && !editMode
              ? contentData[props.sectionName].map((line, index) => (
                  <li key={"text" + index}>
                    <span>{line}</span>
                  </li>
                ))
              : null}
            {emptyLines.map((emptyLine, index) => (
              <li key={"empty" + index}></li>
            ))}
          </React.Fragment>
        )}
      </ul>
      {editMode ? editingPart : null}
      {error ? <ErrorCircle error={error} /> : null}
    </React.Fragment>
  );
};

export default Content;
