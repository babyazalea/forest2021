import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.menu}>
          <li>
            <a href="index.html" className="doorWrap">
              <i className="fas fa-tree"></i>
            </a>
          </li>
          <li id="notice">
            <i className="fas fa-check"></i>
            <span>notice</span>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <a href="portfolio.html">portfolio</a>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <a href="https://github.com/babyazalea">github</a>
          </li>
          <li id="credits">
            <i className="fas fa-check"></i>
            <span>credits</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
