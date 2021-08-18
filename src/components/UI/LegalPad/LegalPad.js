import React from "react";
import {
  useSpring,
  config,
  animated,
  useSpringRef,
  useTransition,
  useChain,
} from "react-spring";

import "./LegalPad.css";

const LegalPad = (props) => {
  const legalPadAnimation = useSpringRef();
  const animation = useSpring({
    ref: legalPadAnimation,
    to: { height: "100%" },
    from: { height: "0%" },
    config: config.default,
  });

  const contentTransition = useSpringRef();
  const transitions = useTransition(props.children, {
    ref: contentTransition,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default,
  });

  useChain([legalPadAnimation, contentTransition]);

  return (
    <animated.div style={animation}>
      <div className="legal-pad">
        {transitions((style) => (
          <animated.div className="content-animation-wrapper" style={style}>
            {props.children}
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default LegalPad;
