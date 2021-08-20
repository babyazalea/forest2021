import React from "react";

import Card from "../../ui/Card/Card";
import Portfolio from "./Portfolio/Portfolio";

import "./PortfolioContent.css";

const PortfolioContent = (props) => {
  return (
    <div className="portfolio-container">
      <ul>
        {props.portfolios.map((portfolio) => (
          <li className="portfolio-item" key={portfolio.id}>
            <Card>
              <Portfolio portfolio={portfolio} />
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioContent;
