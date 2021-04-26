//default
import React from "react";
import { Icon } from "rsuite";

const ButtonAuthForm = ({
  title,
  cancelTitle = "",
  canCanel = false,
  loading = false,
  disabled = false,
  containerClass = "",
  className,
  bgColor = "",
  color = "",
  style,
}) => {
  const buttonClasses = ["button-auth-form", className , loading?"is-loading":""].join(" ");
  return (
    <div className={`m-3 ${containerClass}`}>
      <button  style={style} disabled={disabled} className={buttonClasses}>
        {loading ? <Icon icon="spinner" pulse /> : title}
      </button>
    </div>
  );
};

export default ButtonAuthForm;
