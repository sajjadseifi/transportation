import React from "react";
import { Icon as IconRsuite } from "rsuite";

const InputAuthForm = ({
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
  const inputProps = {
    id: input.name,
    type,
    placeholder,
    ...input,
  };

  return (
    <div className="input-auth-form" style={{ width }}>
      <label htmlFor={input.name}>{title}</label>
      <div className="webflow-style-input">
        <input {...inputProps} />
        <button type="submit">
          {Icon ? Icon : <IconRsuite icon={icon} />}
        </button>
      </div>
      {touched && error && <span className="text-red p-2">{error}</span>}
    </div>
  );
};

export default InputAuthForm;
