//default
import React from "react";
import { Loader } from "rsuite";
import { Button, Span } from "../html";

export const buttonType = {
  info: "success",
  info: "info",
  danger: "danger",
};
const ButtonForm = ({
  title,
  loading,
  disabled,
  IsButton,
  type = "default",
  size = 20,
  children,
  ...props
}) => {
  let CMP = IsButton || disabled || loading ? Button : Span;

  const style = {
    fontSize: size,
  };
  const className = `btn btn-${type} text-white px-5 mx-3 position-relative ${
    disabled || loading ? "deactive" : ""
  }`;

  return (
    <CMP
      {...props}
      style={style}
      className={className}
      disabled={disabled || loading}
    >
      <span className={loading ? "text-transparent" : ""}>
        {title || children}
      </span>
      {loading && (
        <span className="loader-abs-cneter">
          <Loader inverse />
        </span>
      )}
    </CMP>
  );
};

export default ButtonForm;
