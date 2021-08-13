import React from "react";
import ControlBox from "../../UI/ControlBox/ControlBox";
import Form from "../../UI/Form/Form";

const NewPortfolio = () => {
  return (
    <div className="new-portfolio">
      <Form isPortfolio>
        <ControlBox isWriting />
      </Form>
    </div>
  );
};

export default NewPortfolio;
