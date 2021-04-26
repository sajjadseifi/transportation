//default
import React from "react";
const ErrorBoxList = ({ isError,error }) => {
  return (
    <div
      className={` form-panel-error ${
        isError ? "valid-feedback" : "invalid-feedback"
      }`}
    >
      {error.map((x, i) => (
        <div key={i}>{x}</div>
      ))}
    </div>
  );
};

export default ErrorBoxList;
