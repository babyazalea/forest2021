import React, { useEffect, useState } from "react";
import { useHttp } from "../../../hooks/http-hooks";

import LoadingDots from "../LoadingDots/LoadingDots";

import "./Form.css";

const Form = (props) => {
  const [editingContent, setEditingContent] = useState(null);

  useEffect(() => {
    if (props.contentData) {
      setEditingContent(props.contentData.join("\n"));
    }
  }, [props.contentData]);

  const { isLoading, error, sendPostRequest, sendPatchRequest } = useHttp();

  const contentEditingHandler = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "section-description") {
      setEditingContent(value);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (props.sectionName === "notice" || props.sectionName === "credits") {
      const url = `https://forest2021-a1e4c-default-rtdb.firebaseio.com/${props.sectionName}.json`;

      const data = {
        description: editingContent,
        lastSavedAt: Date.now(),
      };

      try {
        const responseData = await sendPatchRequest(url, data);

        if (responseData) {
          const splitedContent = editingContent.split("\n");
          props.editedContent(props.sectionName, splitedContent);
          props.unEditModeHandler();
        }
      } catch (err) {}
    }
  };

  const sectionForm = (
    <textarea
      name="section-description"
      className="section-description"
      cols="30"
      rows="10"
      onChange={contentEditingHandler}
      value={editingContent || ""}
    ></textarea>
  );

  let newCardContent = (
    <div className="new-portfolio-content">
      <div className="logo-image-upload">
        <input
          type="file"
          className="logo-image"
          name="logo-image"
          accept="image/png, image/jpeg"
        />
      </div>
      <div className="new-portfolio-description">
        <textarea
          name="portfolio-description"
          className="portfolio-description"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div className="new-portfolio-link">
        <input type="text" name="portfolio-play-link" />
        <input type="text" name="portfolio-github-link" />
      </div>
    </div>
  );

  if (props.sectionName === "reading") {
    newCardContent = (
      <div className="new-reading-content">
        <div>
          <input
            type="text"
            name="reading-title"
            className="reading-title-input"
          />
        </div>
        <div className="logo-image-upload">
          <input
            type="file"
            className="logo-image"
            name="logo-image"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
    );
  }

  return (
    <form className="editing-form" onSubmit={submitHandler}>
      {isLoading ? (
        <LoadingDots customClassName="in-tap" />
      ) : (
        <React.Fragment>
          {props.sectionName === "portfolios" || props.sectionName === "reading"
            ? newCardContent
            : sectionForm}
          {error ? <p className="error-message">{error}</p> : null}
        </React.Fragment>
      )}
      <button>save</button>
    </form>
  );
};

export default Form;
