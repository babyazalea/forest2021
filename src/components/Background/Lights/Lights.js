import React from "react";

import classes from "./Lights.module.css";

const Lights = () => {
  return (
    <React.Fragment>
      <div className={`${classes.light} ${classes.light1}`}></div>
      <div className={`${classes.light} ${classes.light2}`}></div>
      <div className={`${classes.light} ${classes.light3}`}></div>
      <div className={`${classes.light} ${classes.light4}`}></div>
      <div className={`${classes.light} ${classes.light5}`}></div>
      <div className={`${classes.light} ${classes.light6}`}></div>
      <div className={`${classes.light} ${classes.light7}`}></div>
      <div className={`${classes.light} ${classes.light8}`}></div>
    </React.Fragment>
  );
};

export default Lights;
