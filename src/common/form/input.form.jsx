import React from "react";
import { Icon as IconRsuite } from "rsuite";

const InputForm = ({
  icon,
  Icon,
  input,
  title,
  width,
  type,
  placeholder,
  meta: { touched, error },
  className,
}) => {
  return (
    <div className={className} style={{ width }}>
      <label htmlfor={input.name}>{title}</label>
      <div className="input-form-content">
        {Icon ? Icon : <IconRsuite icon={icon} />}
        <input
          id={input.name}
          type={type}
          placeholder={placeholder}
          {...input}
        />
      </div>
      {touched && error && <span className="text-red p-2">{error}</span>}
    </div>
  );
};

export default InputForm;
