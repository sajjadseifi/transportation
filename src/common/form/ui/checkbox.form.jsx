//default
import React from "react";
import InputForm from "./input.form";
const CheckBoxFormPanel = ({ label, checked, ...props }) => {
  const { input, width, type, title } = props;
  const id =props.id ?? input.name;
  return (
    <InputForm {...props}>
      <div style={{ width }} className={`form-group form-panel-group`}>
        <div
          className={`custom-control ${
            type == "radio" ? "custom-radio" : "custom-checkbox"
          }  d-flex align-items-center`}
        >
          <input
            {...input}
            type={input.type || "checkbox"}
            id={id}
            checked={checked}
            className="custom-control-input"
          />
          <label
            className="px-2 custom-control-label form-panel-label"
            htmlFor={id}
          >
            {label}
          </label>
        </div>
      </div>
    </InputForm>
  );
};
export default CheckBoxFormPanel;
