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

  const className = `btn btn-${type} px-5  text-white ${disabled || loading ? "deactive" : ""}`;

  return (
    <div className="mx-3 position-relative d-inline-block">
      <CMP
        {...props}
        style={style}
        className={className}
        disabled={disabled || loading}
      >
        <span className={loading ? "text-transparent" : ""}>
          {title || children}
        </span>
      </CMP>
      {loading && (
        <span className="loader-abs-cneter text-muted-light">
          <Loader className="text-muted-light" inverse />
        </span>
      )}
    </div>
  );
};

export default ButtonForm;
