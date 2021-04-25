import React from "react";
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
      <label className="form-control-label form-panel-label my-3" for={input.name}>
        {title}
      </label>
      <input
        type={type}
        {...input}
        placeholder={placeholder}
        id={input.name}
        type="text"
        className={`form-control form-panel-input is-${stateClasses} `}
      />
      {touched && error && isError && (
        <div className={isError ? "valid-feedback form-panel-error" : "invalid-feedback form-panel-error"}>
          {error.map((x) => `<div>${x}</div>`).join(" ")}
        </div>
      )}
    </div>
  );
};

export default InputPanelForm;
