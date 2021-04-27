import React from "react";
import InputForm from "./input.form";

const InputPanelForm = (props) => {
  const {
    type,
    input,
    placeholder,
    isNumber,
    meta: { touched, error },
  } = props;

  const isError = error && error.length !== 0;
  const stateClasses = !error || !touched ? "" : isError ? "invalid" : "valid";

  const onChangeHandler = (e) => {
    let text = e.target.value + "";

    if (isNumber) text = text.match(/\d+/);
    console.log({ isNumber, text });
    
    input.onChange({
      ...e,
      target: {
        ...e.target,
        value:( text && text[0]) || "",
      },
    });
  };
  const inpProps = {
    ...input,
    onChange: onChangeHandler,
  };
  return (
    <InputForm {...props}>
      <div className="form-group">
        <div className="input-group mb-3">
          <input
            {...inpProps}
            {...{type,placeholder}}
            id={input.name}
            className={`form-control form-panel-input is-${stateClasses} `}
          />
        </div>
      </div>
    </InputForm>
  );
};

export default InputPanelForm;
