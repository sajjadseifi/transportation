import React from "react";
import InputForm from "./input.form";

const InputPanelForm = (props) => {
  const {
    type,
    input,
    placeholder,
    meta: { touched, error },
  } = props;

  const isError = error && error.length != 0;
  const stateClasses = !error || !touched ? "" : isError ? "invalid" : "valid";

  return (
    <InputForm {...props}>
      <div className="form-group">
        <div className="input-group mb-3">
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
    </InputForm>
  );
};

export default InputPanelForm;
