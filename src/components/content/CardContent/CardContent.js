import React from "react";

import Card from "../../ui/Card/Card";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import ReadingItem from "./ReadingItem/ReadingItem";

import "./CardContent.css";

const CardContent = (props) => {
  return (
    <div className={`card-content-container`}>
      <ul>
        {props.sectionName === "portfolios" &&
          props.contents.map((content) => (
            <li className="portfolio-line" key={content.id}>
              <Card>
                <PortfolioItem portfolio={content} />
              </Card>
            </li>
          ))}
        {props.sectionName === "reading" &&
          props.contents.map((content) => (
            <li className="reading-line" key={content.id}>
              <Card>
                <ReadingItem reading={content} />
              </Card>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CardContent;
