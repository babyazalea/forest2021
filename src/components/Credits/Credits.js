import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import LegalPad from "../UI/LegalPad/LegalPad";

const Credits = (props) => {
  const text = "이것은 크레딧입니다.<br/> test text.";

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="views credits">
        <LegalPad text={text} />
      </div>
    </React.Fragment>
  );
};

export default Credits;
