import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import LegalPad from "../UI/LegalPad/LegalPad";
import Card from "../UI/Card/Card";

const Portfolios = (props) => {
  // const text = "이것은 포트폴리오입니다.<br/> test text.";

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="views portfolios">
        <LegalPad>
          <Card onLegalPad={true}>
            <p>good</p>
          </Card>
        </LegalPad>
      </div>
    </React.Fragment>
  );
};

export default Portfolios;
