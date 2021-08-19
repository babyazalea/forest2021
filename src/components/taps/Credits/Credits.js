import React from "react";

import Backdrop from "../../ui/Backdrop/Backdrop";
import LegalPad from "../../ui/LegalPad/LegalPad";
import Content from "../../content/Content";

const Credits = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="tap credits">
        <LegalPad>
          <Content isJustEdit={true} sectionName="credits" />
        </LegalPad>
      </div>
    </React.Fragment>
  );
};

export default Credits;
