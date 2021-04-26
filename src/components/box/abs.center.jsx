//default
import React from "react";
const AbsCenter = ({ children, ...props }) => {
  return (
    <div className="position-absolute w-100 h-100">
      <div>{children}</div>
    </div>
  );
};

export default AbsCenter;
