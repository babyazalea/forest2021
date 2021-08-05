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
            <span>소개</span>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <span>만든 것들</span>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <span>읽을거리</span>
          </li>
          <li id="credits">
            <i className="fas fa-check"></i>
            <span>숲에 대하여</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
