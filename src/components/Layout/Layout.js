import React from "react";

import Header from "./Header/Header";

import "./Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header
        selectedMenu={props.selectedMenu}
        menuClickHandler={props.menuClickHandler}
      />
      <main>
        <div className="hidden">
          <button></button>
        </div>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
