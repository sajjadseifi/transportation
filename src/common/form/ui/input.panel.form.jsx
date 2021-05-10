import React from "react";
import { useEffect } from "react";
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

    if (isNumber) {
      text = text.match(/\d+/);
      text = (text && text[0]) || "";
    }

    input.onChange({
      ...e,
      target: {
        ...e.target,
        value: text,
      },
    });
  };
  const inpProps = {
    ...input,
    type: input.type,
    id: input.name,
    placeholder,
    onChange: onChangeHandler,
  };
  return (
    <InputForm {...props}>
      <div className="form-group">
        <div className="input-group">
          <input
            {...inpProps}
            className={`form-control form-panel-input is-${stateClasses} `}
          />
        </div>
      </div>
    </InputForm>
  );
};

export default InputPanelForm;
