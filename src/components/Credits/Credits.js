import React from "react";

import LegalPad from "../UI/LegalPad/LegalPad";

const Credits = () => {
  const text = "이것은 크레딧입니다.<br/> test text.";

  return (
    <div className="reading">
      <LegalPad text={text} />
    </div>
  );
};

export default Credits;
