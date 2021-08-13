import React from "react";

import Backdrop from "../../ui/Backdrop/Backdrop";
import LegalPad from "../../ui/LegalPad/LegalPad";

const Reading = (props) => {
  const text = "이것은 리딩입니다.<br/> test text.";

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="tap reading">
        <LegalPad text={text} isJustEdit={true} />
      </div>
    </React.Fragment>
  );
};

export default Reading;
