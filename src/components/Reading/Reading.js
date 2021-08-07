import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import LegalPad from "../UI/LegalPad/LegalPad";

const Reading = (props) => {
  const text = "이것은 리딩입니다.<br/> test text.";

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="views reading">
        <LegalPad text={text} />
      </div>
    </React.Fragment>
  );
};

export default Reading;
