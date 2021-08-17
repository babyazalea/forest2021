import React, { useState } from "react";

import Layout from "./components/layout/Layout";
import Lights from "./components/effects/Lights/Lights";
import Notice from "./components/taps/Notice/Notice";
import Portfolios from "./components/taps/Portfolios/Portfolios";
import Reading from "./components/taps/Reading/Reading";
import Credits from "./components/taps/Credits/Credits";

import AdminContext from "./context/admin-context";

import "./App.css";
import { useMenu } from "./hooks/menu-hooks";
import { useAuth } from "./hooks/auth-hooks";

const App = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const { selectedMenu, menuClickHandler, viewCloseHandler } = useMenu();

  return (
    <div className="App">
      <Lights />
      <AdminContext.Provider value={{ isLoggedIn: isLoggedIn }}>
        <Layout selectedMenu={selectedMenu} menuClickHandler={menuClickHandler}>
          {selectedMenu.notice && (
            <Notice viewCloseHandler={viewCloseHandler} />
          )}
          {selectedMenu.portfolios && (
            <Portfolios viewCloseHandler={viewCloseHandler} />
          )}
          {selectedMenu.reading && (
            <Reading viewCloseHandler={viewCloseHandler} />
          )}
          {selectedMenu.credits && (
            <Credits viewCloseHandler={viewCloseHandler} />
          )}
        </Layout>
      </AdminContext.Provider>
    </div>
  );
};

export default App;
