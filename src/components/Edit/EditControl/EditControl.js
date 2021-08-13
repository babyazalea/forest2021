import React from "react";

const EditingControl = () => {
  return (
    <div className="editing-control">
      <button>
        <i class="fas fa-plus"></i>
      </button>
      <button>
        <i className="fas fa-edit"></i>
      </button>
      <button>
        <i className="fas fa-save"></i>
      </button>
    </div>
  );
};

export default EditingControl;
