import React, { useContext, useState } from "react";
import {
  useSpring,
  config,
  animated,
  useSpringRef,
  useTransition,
  useChain,
} from "react-spring";

import AdminContext from "../../../context/admin-context";

import Card from "../Card/Card";
import ControlBox from "../ControlBox/ControlBox";
import Portfolio from "./Portfolio/Portfolio";
import EditingContent from "../../edit/EditingContent/EditingContent";

import "./LegalPad.css";

const LegalPad = (props) => {
  const [editMode, setEditMode] = useState(false);

  const adminContext = useContext(AdminContext);

  // min length for list: 20
  let transformedArray;
  let emptyLines = [];

  if (props.content) {
    transformedArray = props.content.split("<br/>");
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
          enter: { opacity: 1 },
          leave: { opacity: 0 },
          config: config.molasses,
        }
      : {}
  );

  useChain([legalPadSpringApi, cardTransApi], [0, 0.15]);

  const editModeHandler = () => {
    setEditMode(true);
  };

  const portfolioList = (
    <div className="portfolio-container">
      <ul>
        {transitions((style, item) => (
          <animated.li className="portfolio-item" key={item.id} style={style}>
            <Card>
              <Portfolio portfolio={item} />
            </Card>
          </animated.li>
        ))}
      </ul>
    </div>
  );

  const editingPart = (
    <EditingContent
      data={props.content}
      isPortFolio={props.portfolios ? true : false}
    />
  );

  return (
    <animated.div style={animation}>
      <div className="legal-pad">
        <ul>
          <li></li>
          {adminContext.isLoggedIn ? (
            <li className="control-btns">
              <ControlBox
                isWriting={false}
                justEdit={props.isJustEdit}
                editModeHandler={editModeHandler}
              />
            </li>
          ) : (
            <li></li>
          )}
          {transformedArray && !editMode
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
        {editMode ? editingPart : null}
        {props.portfolios && portfolioList}
      </div>
    </animated.div>
  );
};

export default LegalPad;
