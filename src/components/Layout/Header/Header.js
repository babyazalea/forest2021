import React from "react";

import "./Header.css";

const Header = (props) => {
  let checkedClass = `fas fa-check checked`;

  return (
    <header>
      <nav>
        <ul className="menu">
          <li onClick={() => props.menuClickHandler("home")}>
            <i className="fas fa-tree"></i>
          </li>
          <li onClick={() => props.menuClickHandler("notice")}>
            <i
              className={
                props.selectedMenu.notice ? checkedClass : "fas fa-check"
              }
            ></i>
            <span>소개</span>
          </li>
          <li onClick={() => props.menuClickHandler("portfolios")}>
            <i
              className={
                props.selectedMenu.portfolios ? checkedClass : "fas fa-check"
              }
            ></i>
            <span>만든 것들</span>
          </li>
          <li onClick={() => props.menuClickHandler("reading")}>
            <i
              className={
                props.selectedMenu.reading ? checkedClass : "fas fa-check"
              }
            ></i>
            <span>읽을거리</span>
          </li>
          <li onClick={() => props.menuClickHandler("credits")}>
            <i
              className={
                props.selectedMenu.credits ? checkedClass : "fas fa-check"
              }
            ></i>
            <span>숲에 대하여</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
