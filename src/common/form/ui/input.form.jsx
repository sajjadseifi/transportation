import React from "react";
import ErrorBoxList from "../../../components/UI/error/ErrorBoxList";

const InputForm = ({
  input,
  title,
  width,
  type,
  placeholder,
  className,
  meta: { touched, error },
  render = ({}) => <></>,
  children = <></>,
}) => {
  const Render = render;
  const isError = error && error.length === 0;
  const stateClasses = !error ? "" : isError ? "invalid" : "valid";
  return (
    <div
      style={{ width }}
      className={`form-group form-panel-group  has-${stateClasses} ${className}`}
    >
      <label
        className="form-control-label form-panel-label my-3"
        htmlFor={input.name}
      >
        {title}
      </label>
      <Render {...{ type, placeholder, input, stateClasses }} />
      {children}
      {touched && error && <ErrorBoxList isError={isError} error={error} />}
    </div>
  );
};

export default InputForm;
