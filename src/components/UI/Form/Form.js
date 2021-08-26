import React, { useEffect, useState } from "react";
import { useHttp } from "../../../hooks/http-hooks";

import LoadingDots from "../LoadingDots/LoadingDots";

import "./Form.css";

const Form = (props) => {
  const [editingContent, setEditingContent] = useState({
    description: "",
    lastSavedAt: "",
  });
  const [newCardContent, setNewCardCotent] = useState({
    portfolio: {
      logoImageUrl: "",
      description: "",
      playUrl: "",
      githubUrl: "",
    },
    reading: {
      title: "",
      logoImageUrl: "",
    },
  });

  useEffect(() => {
    if (props.contentData) {
      setEditingContent(props.contentData.join("\n"));
    }
  }, [props.contentData]);

  const { isLoading, error, sendPostRequest, sendPatchRequest } = useHttp();

  const updateCardContent = (contentCategory, valueName, value) => {
    setNewCardCotent((prevState) => {
      return {
        ...prevState,
        [contentCategory]: {
          ...prevState[contentCategory],
          [valueName]: value,
        },
      };
    });
  };

  const contentEditingHandler = (event) => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case "section-description":
        setEditingContent(value);
        break;
      case "portfolio-logo-url":
        updateCardContent("portfolio", "logoImageUrl", value);
        break;
      case "portfolio-description":
        updateCardContent("portfolio", "description", value);
        break;
      case "portfolio-play-url":
        updateCardContent("portfolio", "playUrl", value);
        break;
      case "portfolio-github-url":
        updateCardContent("portfolio", "githubUrl", value);
        break;
      case "reading-title":
        updateCardContent("reading", "title", value);
        break;
      case "reading-logo-url":
        updateCardContent("reading", "logoImageUrl", value);
        break;
      default:
        return;
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const url = `https://forest2021-a1e4c-default-rtdb.firebaseio.com/${props.sectionName}.json`;

    const data =
      props.sectionName === "notice" || props.sectionName === "credits"
        ? {
            description: editingContent,
            lastSavedAt: Date.now(),
          }
        : props.sectionName === "portfolios"
        ? newCardContent.portfolio
        : newCardContent.reading;

    try {
      const responseData =
        props.sectionName === "notice" || props.sectionName === "credits"
          ? await sendPatchRequest(url, data)
          : await sendPostRequest(url, data);

      if (
        responseData !== null &&
        (props.sectionName === "notice" || props.sectionName === "credits")
      ) {
        const splitedContent = editingContent.split("\n");
        props.editedContent(props.sectionName, splitedContent);
      } else if (responseData !== null && props.sectionName === "portfolios") {
        props.editedContent(props.sectionName, newCardContent.portfolio);
      } else if (responseData !== null && props.sectionName === "reading") {
        props.editedContent(props.sectionName, newCardContent.reading);
      }
    } catch (err) {}
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

  let newCardMaking = (
    <div className="new-portfolio-content">
      <div className="logo-image-upload">
        <label htmlFor="portfolio-logo-url">logo image url</label>
        <input
          type="text"
          name="portfolio-logo-url"
          onChange={contentEditingHandler}
        />
      </div>
      <div className="new-portfolio-description">
        <textarea
          name="portfolio-description"
          className="portfolio-description"
          cols="30"
          rows="5"
          onChange={contentEditingHandler}
        ></textarea>
      </div>
      <div className="new-portfolio-url">
        <label htmlFor="portfolio-play-url">play url</label>
        <input
          type="text"
          name="portfolio-play-url"
          onChange={contentEditingHandler}
        />
        <label htmlFor="portfolio-gihub-url">github url</label>
        <input
          type="text"
          name="portfolio-github-url"
          onChange={contentEditingHandler}
        />
      </div>
    </div>
  );

  if (props.sectionName === "reading") {
    newCardMaking = (
      <div className="new-reading-content">
        <div>
          <input
            type="text"
            name="reading-title"
            className="reading-title-input"
            onChange={contentEditingHandler}
          />
        </div>
        <div className="reading-logo">
          <label htmlFor="reading-logo-url">logo image url</label>
          <input
            type="text"
            name="reading-logo-url"
            onChange={contentEditingHandler}
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
            ? newCardMaking
            : sectionForm}
          {error ? <p className="error-message">{error}</p> : null}
        </React.Fragment>
      )}
      <button>save</button>
      <button onClick={() => props.cancelEditingHandler()}>cancel</button>
    </form>
  );
};

export default Form;
