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
      {console.log({})}
      {touched && error && (
        <h6 className="text-white p-1 py-2 ">
          <ul>
            {[...error].map((er, ind) => (
              <li key={ind}>{er}</li>
            ))}
          </ul>
        </h6>
      )}
    </div>
  );
};

export default InputAuthForm;
