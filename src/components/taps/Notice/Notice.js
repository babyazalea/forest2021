import React from "react";

import Backdrop from "../../ui/Backdrop/Backdrop";
import LegalPad from "../../ui/LegalPad/LegalPad";
import Content from "../../content/Content";

const Notice = (props) => {
  const text =
    "안녕하세요, 저는 유태양이라고 합니다.<br/>이 사이트는 제가 만든 포트폴리오를 소개하는 사이트입니다.<br/>방문해주셔서 감사합니다.<br/>test text;;;;;";

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="tap notice">
        <LegalPad>
          <Content content={text} isJustEdit={true} />
        </LegalPad>
      </div>
    </React.Fragment>
  );
};

export default Notice;
