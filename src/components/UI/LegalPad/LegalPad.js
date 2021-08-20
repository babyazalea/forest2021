import React from "react";
import { useSpring, config, animated } from "react-spring";

import "./LegalPad.css";

const LegalPad = (props) => {
  const animation = useSpring({
    to: { height: "100%" },
    from: { height: "0%" },
    config: config.default,
  });

  return (
    <animated.div style={animation}>
      <div className="legal-pad">{props.children}</div>
    </animated.div>
  );
};

export default LegalPad;
