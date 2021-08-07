import React from "react";

import LegalPad from "../UI/LegalPad/LegalPad";

const Portfolios = () => {
  const text = "이것은 포트폴리오입니다.<br/> test text.";

  return (
    <div className="reading">
      <LegalPad text={text} />
    </div>
  );
};

export default Portfolios;
