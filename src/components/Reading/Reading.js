import React from "react";

import LegalPad from "../UI/LegalPad/LegalPad";

const Reading = () => {
  const text = "이것은 리딩입니다.<br/> test text.";

  return (
    <div className="reading">
      <LegalPad text={text} />
    </div>
  );
};

export default Reading;
