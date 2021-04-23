import React from "react";
const classPos = "position-fixed fixed-top fixed-left";
const Fixed = ({
  wful,
  hfull,
  top,
  left,
  right,
  bottom,
  className,
  children,
}) => {
  let classBox = `${classPos} ${className}`;
  classBox = ` 
  ${top ? "fixed-top" : ""} 
  ${left ? "fixed-left" : ""}
  ${right ? "fixed-right" : ""}
  ${bottom ? "fixed-bottom" : ""}
  `;
  classBox = ` ${wful ? "w-100" : ""} ${hfull ? "h-100" : ""}`;
  return (
    <div style={{ top, left }} className={classBox}>
      {children}
    </div>
  );
};

export default FixedCenterBox;
