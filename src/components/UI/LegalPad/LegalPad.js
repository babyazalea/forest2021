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
  // min length for list: 20
  let transformedArray;
  let emptyLines = [];

  if (props.text) {
    transformedArray = props.text.split("<br/>");
  }

  if (transformedArray && transformedArray.length < 20) {
    const count = 20 - transformedArray.length;
    for (let i = 1; i < count; i++) {
      emptyLines.push("");
    }
  } else {
    for (let i = 1; i < 20; i++) {
      emptyLines.push("");
    }
  }

  const legalPadSpringApi = useSpringRef();
  const animation = useSpring({
    ref: legalPadSpringApi,
    to: { height: "100%" },
    from: { height: "0%" },
    config: config.default,
  });

  const cardTransApi = useSpringRef();
  const transitions = useTransition(
    props.portfolios ? props.portfolios : [],
    props.portfolios
      ? {
          ref: cardTransApi,
          trail: 800 / props.portfolios.length,
          from: { opacity: 0 },
          enter: { opacity: 0.9 },
          leave: { opacity: 0 },
        }
      : {
          ref: cardTransApi,
          from: { opacity: 0 },
          enter: { opacity: 0.9 },
          leave: { opacity: 0 },
        }
  );

  useChain([legalPadSpringApi, cardTransApi], [0, 0.15]);

  return (
    <animated.div style={animation}>
      <div className="legal-pad">
        <ul>
          <li></li>
          <li></li>
          {transformedArray
            ? transformedArray.map((line, index) => (
                <li key={"text" + index}>
                  <span>{line}</span>
                </li>
              ))
            : null}
          {emptyLines.map((emptyLine, index) => (
            <li key={"empty" + index}></li>
          ))}
        </ul>
        {props.portfolios && (
          <div className="portfolio-container">
            <ul>
              {transitions((style, item) => (
                <animated.li
                  className="portfolio-item"
                  key={item.id}
                  style={style}
                >
                  <span>{item.title}</span>
                </animated.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default LegalPad;
