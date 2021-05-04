//default
import React from "react";
import InputForm from "./input.form";
const CheckBoxFormPanel = ({ label, checked, ...props }) => {
  const { input, width, type ,title} = props;
  
  return (
    <InputForm {...props}>
      <div style={{ width }} className={`form-group form-panel-group`}>
        <div className="custom-control custom-checkbox d-flex align-items-center">
          <input
            {...input}
            // type={type}
            type="checkbox"
            id={input.name}
            checked={checked}
            className="custom-control-input"
          />
          <label
            className="px-2 custom-control-label form-panel-label"
            htmlFor={input.name}
          >
            {label}
          </label>
        </div>
      </div>
    </InputForm>
  );
};
export default CheckBoxFormPanel;
