import React from "react";
const classPos = "position-fixed fixed-top fixed-left";
const classFlex = "d-flex align-items-center justify-content-center";
const classSize = "w-100 h-100";
const FixedCenterBox = ({ className, children }) => {
  const classBox = `${classPos} ${classFlex} ${classSize} ${className}`;
  return <div className={classBox}>{children}</div>;
};

export default FixedCenterBox;
