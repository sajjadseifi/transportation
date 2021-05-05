//default
import React from "react";
const FormPanelTop = ({
  formUpdateTitle,
  formTitle,
  loading,
  isUpdate,
  deleting = false,
}) => {
  const bgPbar = deleting
    ? "bg-danger"
    : isUpdate
    ? " bg-info "
    : " bg-success ";

  const title = isUpdate ? formUpdateTitle : formTitle;
  return (
    <div className="form-panel-top  m-3">
      <h3 className="form-panel-title p-5 mx-5">
        <span>{title}</span>
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
