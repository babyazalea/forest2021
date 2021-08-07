import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Lights from "./components/Effects/Lights/Lights";
import Notice from "./components/Notice/Notice";
import Portfolios from "./components/Portfolios/Portfolios";
import Reading from "./components/Reading/Reading";
import Credits from "./components/Credits/Credits";

import "./App.css";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState({
    notice: false,
    portfolios: false,
    reading: false,
    credits: false,
  });

  const menuClickHandler = (menuName) => {
    switch (menuName) {
      case "notice":
        setSelectedMenu((prevState) => {
          if (prevState.notice) {
            return {
              ...prevState,
              notice: false,
            };
          } else {
            return {
              notice: true,
              portfolios: false,
              reading: false,
              credits: false,
            };
          }
        });
        break;
      case "portfolios":
        setSelectedMenu((prevState) => {
          if (prevState.portfolios) {
            return {
              ...prevState,
              portfolios: false,
            };
          } else {
            return {
              notice: false,
              portfolios: true,
              reading: false,
              credits: false,
            };
          }
        });
        break;
      case "reading":
        setSelectedMenu((prevState) => {
          if (prevState.reading) {
            return {
              ...prevState,
              reading: false,
            };
          } else {
            return {
              notice: false,
              portfolios: false,
              reading: true,
              credits: false,
            };
          }
        });
        break;
      case "credits":
        setSelectedMenu((prevState) => {
          if (prevState.credits) {
            return {
              ...prevState,
              credits: false,
            };
          } else {
            return {
              notice: false,
              portfolios: false,
              reading: false,
              credits: true,
            };
          }
        });
        break;
      default:
        setSelectedMenu({
          notice: false,
          portfolios: false,
          reading: false,
          credits: false,
        });
    }
  };

  return (
    <div className="App">
      <Lights />
      <Layout selectedMenu={selectedMenu} menuClickHandler={menuClickHandler}>
        {selectedMenu.notice && <Notice />}
        {selectedMenu.portfolios && <Portfolios />}
        {selectedMenu.reading && <Reading />}
        {selectedMenu.credits && <Credits />}
      </Layout>
    </div>
  );
};

export default App;
