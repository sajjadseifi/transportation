import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InputForm from "./input.form";

const PhoneInputForm = ({ placeholder, ...props }) => {
  const onChangedInputProp = (phone, data, event, formattedValue) => {
    const value = [...formattedValue].filter((f) => f != " ").join("");
    props.input.onChange({ target: { value } });
  };
  return (
    <>
      <InputForm {...props}>
        <input className="d-none" {...props.input} />
        <div className="ltr">
          <PhoneInput
            country="ir"
            placeholder={placeholder}
            inputClass="w-100"
            value={props.input.value}
            onChange={onChangedInputProp}
          />
        </div>
      </InputForm>
    </>
  );
};

export default PhoneInputForm;
