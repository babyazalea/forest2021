import React from "react";

import "./Header.css";

const Header = (props) => {
  let checkedClass = `fas fa-check checked`;

  return (
    <header>
      <nav>
        <ul className="menu">
          <li onClick={() => props.closeTapHandler()}>
            <i className="fas fa-tree"></i>
          </li>
          <li onClick={() => props.selectSectionHandler("notice")}>
            <i
              className={
                props.selectedSection === "notice"
                  ? checkedClass
                  : "fas fa-check"
              }
            ></i>
            <span>소개</span>
          </li>
          <li onClick={() => props.selectSectionHandler("portfolios")}>
            <i
              className={
                props.selectedSection === "portfolios"
                  ? checkedClass
                  : "fas fa-check"
              }
            ></i>
            <span>만든 것들</span>
          </li>
          <li onClick={() => props.selectSectionHandler("reading")}>
            <i
              className={
                props.selectedSection === "reading"
                  ? checkedClass
                  : "fas fa-check"
              }
            ></i>
            <span>읽을거리</span>
          </li>
          <li onClick={() => props.selectSectionHandler("credits")}>
            <i
              className={
                props.selectedSection === "credits"
                  ? checkedClass
                  : "fas fa-check"
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
