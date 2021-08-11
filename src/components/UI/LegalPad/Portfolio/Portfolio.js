import React from "react";

import "./Portfolio.css";

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <img
          className="portfolio-logo"
          src={props.portfolio.logo}
          alt="portfolio logo"
        />
        <span className="portfolio-description">
          {props.portfolio.description}
        </span>
        <div className="portfolio-icons">
          <a
            href={props.portfolio.portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="portfolio-icon-play"
          >
            <i className="fas fa-play"></i>
          </a>
          <a
            href={props.portfolio.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="portfolio-icon-github"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
