import React from "react";

import Backdrop from "../../ui/Backdrop/Backdrop";
import LegalPad from "../../ui/LegalPad/LegalPad";
import Content from "../../content/Content";

const Notice = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="tap notice">
        <LegalPad>
          <Content isJustEdit={true} sectionName="notice" />
        </LegalPad>
      </div>
    </React.Fragment>
  );
};

export default Notice;
