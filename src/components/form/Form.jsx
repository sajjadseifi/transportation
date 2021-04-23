//default
import React from "react";
const Form = ({ children, className, ...props }) => {
  let updatedClass = `w-100 ${className || ""}`;
  return (
    <form className={updatedClass} {...props}>
      {children}
    </form>
  );
};

export default Form;
