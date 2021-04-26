//default
import React from "react";
const FormPanelTop = ({ formTitle, loading, isUpdate, deleting = false }) => {
  const bgPbar = deleting ? "bg-danger" : isUpdate ? " bg-info " : " bg-success ";
  return (
    <div className="form-panel-top  m-3">
      <h3 className="form-panel-title p-5 mx-5">
        <span>{formTitle}</span>
      </h3>
      <div className="progress">
        <div
          className={`progress-bar progress-bar-striped ${bgPbar} ${
            loading ? " progress-bar-animated " : " opacity-0 "
          }`}
          role="progressbar"
        //   ariaValuenow="75"
        //   ariaValuemin="0"
        //   ariaValuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default FormPanelTop;
