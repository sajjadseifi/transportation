import React from "react";

const InputForm = ({
  icon,
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
      <label htnlfor={input.name}>{title}</label>
      <input id={input.name} type={type} {...input} placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

export default InputForm;
