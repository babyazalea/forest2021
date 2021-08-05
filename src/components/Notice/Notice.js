import React from "react";

import LegalPad from "../UI/LegalPad/LegalPad";

import classes from "./Notice.module.css";

const Notice = () => {
  const text =
    "안녕하세요, 저는 유태양이라고 합니다.<br/>이 사이트는 제가 만든 포트폴리오를 소개하는 사이트입니다. 방문해주셔서 감사합니다.<br/>test text;;;;;";

  return (
    <div className={classes.notice}>
      <LegalPad text={text} />
    </div>
  );
};

export default Notice;
