import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import LegalPad from "../UI/LegalPad/LegalPad";
import Card from "../UI/Card/Card";

const Portfolios = (props) => {
  const portfolios = [
    { id: 1, title: "test" },
    { id: 2, title: "test2" },
    { id: 3, title: "test3" },
  ];

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="views portfolios">
        <LegalPad portfolios={portfolios}>
          {/* <div className="portfolio-container">
            <ul>
              <li>
                <Card>
                  <p>good</p>
                </Card>
              </li>
            </ul>
          </div> */}
        </LegalPad>
      </div>
    </React.Fragment>
  );
};

export default Portfolios;
