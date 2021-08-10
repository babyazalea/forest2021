import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import LegalPad from "../UI/LegalPad/LegalPad";

const Portfolios = (props) => {
  const portfolios = [
    { id: 1, title: "test" },
    { id: 2, title: "test2" },
    { id: 3, title: "test3" },
  ];

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="views portfolios">
        <LegalPad portfolios={portfolios} />
      </div>
    </React.Fragment>
  );
};

export default Portfolios;
