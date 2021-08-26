import React from "react";

import Card from "../../ui/Card/Card";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import ReadingItem from "./ReadingItem/ReadingItem";

import "./CardContent.css";
import Form from "../../ui/Form/Form";

const CardContent = (props) => {
  const portfoliosPart = props.contents.map((content, index) => (
    <li className="portfolio-line" key={index}>
      <Card>
        <PortfolioItem portfolio={content} />
      </Card>
    </li>
  ));

  const readingsPart = props.contents.map((content, index) => (
    <li className="reading-line" key={index}>
      <Card>
        <ReadingItem reading={content} />
      </Card>
    </li>
  ));

  const newContentPart = (sectionName) => {
    return (
      <Card>
        <div
          className={
            sectionName === "portfolios" ? "portfolio-item" : "reading-item"
          }
        >
          <Form
            sectionName={sectionName}
            cancelEditingHandler={props.cancelEditingHandler}
            editedContent={props.editedContent}
          />
        </div>
      </Card>
    );
  };

  return (
    <div className={`card-content-container`}>
      <ul>
        {props.sectionName === "portfolios" ? (
          <React.Fragment>
            {props.addMode ? (
              <React.Fragment>
                <li className="new-portfolio-line">
                  {newContentPart(props.sectionName)}
                </li>
                {portfoliosPart}
              </React.Fragment>
            ) : (
              portfoliosPart
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {props.addMode ? (
              <React.Fragment>
                <li className="new-reading-line">
                  {newContentPart(props.sectionName)}
                </li>
                {readingsPart}
              </React.Fragment>
            ) : (
              readingsPart
            )}
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default CardContent;
