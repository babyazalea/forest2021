import { useState } from "react";

export const useMenu = () => {
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
      case "home":
        setSelectedMenu({
          notice: false,
          portfolios: false,
          reading: false,
          credits: false,
        });
        break;
      default:
        return;
    }
  };

  const viewCloseHandler = () => {
    setSelectedMenu({
      notice: false,
      portfolios: false,
      reading: false,
      credits: false,
    });
  };

  return {
    selectedMenu,
    menuClickHandler,
    viewCloseHandler,
  };
};
