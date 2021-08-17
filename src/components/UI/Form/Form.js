import React, { useState } from "react";

const Form = (props) => {
  const [content, setContent] = useState(props.content);

  const contentEditingHandler = (event) => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case name === "section-description":
        setContent(value);
        break;
      default:
        return;
    }
  };

  const submitHandler = () => {
    console.log(content);
  };

  const sectionForm = (
    <textarea
      name="section-description"
      id="section-description"
      cols="30"
      rows="10"
      onChange={contentEditingHandler}
      value={content}
    ></textarea>
  );

  const portfolioForm = (
    <React.Fragment>
      <div className="logo-image-upload">
        <input
          type="file"
          id="logo-image"
          name="logo-image"
          accept="image/png, image/jpeg"
        />
      </div>
      <div>
        <textarea
          name="portfolio-description"
          id="portfolio-description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <input type="text" name="portfolio-play-link" />
        <input type="text" name="portfolio-github-link" />
      </div>
    </React.Fragment>
  );

  return (
    <form onSubmit={submitHandler}>
      {props.isPortfolio ? portfolioForm : sectionForm}
    </form>
  );
};

export default Form;
