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
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
