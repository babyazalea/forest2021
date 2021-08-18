import React from "react";

import Backdrop from "../../ui/Backdrop/Backdrop";
import LegalPad from "../../ui/LegalPad/LegalPad";
import Content from "../../content/Content";

const Reading = (props) => {
  const text = "이것은 리딩입니다.<br/> test text.";

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="tap reading">
        <LegalPad>
          <Content content={text} />
        </LegalPad>
      </div>
    </React.Fragment>
  );
};

export default Reading;
