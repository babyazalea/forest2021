import React from "react";
import { useSpring, animated } from "react-spring";

import "./LegalPad.css";

const LegalPad = (props) => {
  // min length for list: 20
  let transformedArray;
  if (props.text) {
    transformedArray = props.text.split("<br/>");
  }

  let emptyLines = [];
  if (transformedArray.length < 20) {
    const count = 20 - transformedArray.length;
    for (let i = 1; i < count; i++) {
      emptyLines.push("");
    }
  }

  const animation = useSpring({
    to: { height: "100%" },
    from: { height: "0%" },
  });

  return (
    <animated.div style={animation}>
      <div className="legal-pad">
        <ul>
          <li></li>
          <li></li>
          {transformedArray.map((line, index) => (
            <li key={"text" + index}>
              <span>{line}</span>
            </li>
          ))}
          {emptyLines.map((emptyLine, index) => (
            <li key={"empty" + index}></li>
          ))}
        </ul>
      </div>
    </animated.div>
  );
};

export default LegalPad;
