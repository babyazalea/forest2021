import React from "react";

import Backdrop from "../ui/Backdrop/Backdrop";
import LegalPad from "../ui/LegalPad/LegalPad";
import Content from "../content/Content";

const Tap = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.closeTapHandler} />
      {props.selectedSection !== null && (
        <div className={`tap ${props.selectedSection}`}>
          <LegalPad>
            <Content
              cancelEditingHandler={props.cancelEditingHandler}
              editModeHandler={props.editModeHandler}
              editedContent={props.editedContent}
              sectionName={props.selectedSection}
              contentData={props.contentData}
            />
          </LegalPad>
        </div>
      )}
    </React.Fragment>
  );
};

export default Tap;
