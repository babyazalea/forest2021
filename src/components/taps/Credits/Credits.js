import React from "react";

import Backdrop from "../../ui/Backdrop/Backdrop";
import LegalPad from "../../ui/LegalPad/LegalPad";

const Credits = (props) => {
  const text = "이것은 크레딧입니다.<br/> test text.";

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="tap credits">
        <LegalPad text={text} isJustEdit={true} />
      </div>
    </React.Fragment>
  );
};

export default Credits;
