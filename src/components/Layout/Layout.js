import React, { useContext, useState } from "react";
import AdminContext from "../../context/admin-context";

import Header from "./Header/Header";
import AdminLoginForm from "../admin/AdminLoginForm/AdminLoginForm";

import "./Layout.css";

const Layout = (props) => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const adminContext = useContext(AdminContext);

  const toggleAdminLogin = () => {
    setIsAdminLogin(!isAdminLogin);
  };

  const onLogout = () => {
    setIsAdminLogin(false);
    props.logout();
  };

  return (
    <React.Fragment>
      <Header
        selectSectionHandler={props.selectSectionHandler}
        selectedSection={props.selectedSection}
        menuClickHandler={props.menuClickHandler}
        closeTapHandler={props.closeTapHandler}
      />
      <main>
        <div className="hidden">
          {adminContext.isLoggedIn ? (
            <button className="logout-btn" onClick={onLogout}>
              logout
            </button>
          ) : (
            <React.Fragment>
              {isAdminLogin ? (
                <button className="cancel-btn" onClick={toggleAdminLogin}>
                  <i className="fas fa-times"></i>
                </button>
              ) : (
                <button
                  className="hidden-btn"
                  onClick={toggleAdminLogin}
                ></button>
              )}
            </React.Fragment>
          )}
          {isAdminLogin && !adminContext.isLoggedIn ? (
            <AdminLoginForm login={props.login} />
          ) : null}
        </div>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
