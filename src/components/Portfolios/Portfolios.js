import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import ControlBox from "../UI/ControlBox/ControlBox";
import LegalPad from "../UI/LegalPad/LegalPad";

const Portfolios = (props) => {
  const portfolios = [
    {
      id: 1,
      logo: "https://i.picsum.photos/id/529/200/300.jpg?hmac=WqdWbOIAJ1H2q4r92Fc4KXM--xvRadidXmV5P2R1rDg",
      description:
        "이것은 test입니다. 이 텍스트가 이미지를 감싸는지 테스트해보게씁니다. 하하하하하하하하하ㅏ하하하하하하하하. 이게 무엇이길래 다들 이 난리인지 모르겠습니다. 하지만 전 이것을 계속합니다. 지칠 떄까지요.",
      portfolioUrl: "https://www.google.com",
      githubUrl: "https://github.com/babyazalea/forest2021",
    },
    {
      id: 2,
      logo: "https://i.picsum.photos/id/529/200/300.jpg?hmac=WqdWbOIAJ1H2q4r92Fc4KXM--xvRadidXmV5P2R1rDg",
      description: "이것은 test2입니다",
      portfolioUrl: "https://www.google.com",
      githubUrl: "https://github.com/babyazalea/forest2021",
    },
    {
      id: 3,
      logo: "https://i.picsum.photos/id/529/200/300.jpg?hmac=WqdWbOIAJ1H2q4r92Fc4KXM--xvRadidXmV5P2R1rDg",
      description: "이것은 test3입니다",
      portfolioUrl: "https://www.google.com",
      githubUrl: "https://github.com/babyazalea/forest2021",
    },
  ];

  return (
    <React.Fragment>
      <Backdrop onClose={props.viewCloseHandler} />
      <div className="tap portfolios">
        <LegalPad portfolios={portfolios}>
          <ControlBox isWriting={false} />
        </LegalPad>
      </div>
    </React.Fragment>
  );
};

export default Portfolios;
