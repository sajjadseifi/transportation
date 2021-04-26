import React from "react";
import ErrorBoxList from "../../../components/UI/error/ErrorBoxList";
// import { Icon as IconRsuite } from "rsuite";

const InputPanelForm = ({
  input,
  title,
  width,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  const isError = error && error.length === 0;
  const stateClasses = !error ? "" : isError ? "invalid" : "valid";
  return (
    <div
      style={{ width }}
      className={`form-group form-panel-group  has-${stateClasses}`}
    >
      <label
        className="form-control-label form-panel-label my-3"
        htmlFor={input.name}
      >
        {title}
      </label>

      <div class="form-group">
        <div class="input-group mb-3">
          <input
            type={type}
            {...input}
            placeholder={placeholder}
            id={input.name}
            type="text"
            className={`form-control form-panel-input is-${stateClasses} `}
          />
        </div>
      </div>
      {touched && error (<ErrorBoxList isError={isError} error={error}  />)}
    </div>
  );
};

export default InputPanelForm;
