import React, { useContext } from "react";
import AdminContext from "../../context/admin-context";

import Header from "./Header/Header";

import "./Layout.css";

const Layout = (props) => {
  const adminContext = useContext(AdminContext);

  return (
    <React.Fragment>
      <Header
        selectedMenu={props.selectedMenu}
        menuClickHandler={props.menuClickHandler}
      />
      <main>
        <div className="hidden">
          {adminContext.isLoggedIn ? (
            <button className="logout-btn" onClick={props.logout}>
              logout
            </button>
          ) : (
            <button className="login-btn" onClick={props.login}></button>
          )}
        </div>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
