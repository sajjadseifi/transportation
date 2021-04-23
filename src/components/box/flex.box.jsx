//default
import React from "react";

// const alignItems = "" | "start" | "center" | "end";
// const justifyContent = "" | "start" | "center" | "end";
const FlexBox = ({
  alignItems,
  justifyContent,
  alignCenter,
  justCenter,
  className,
  children,
  culumn,
}) => {
  const classes = `
  d-flex 
  ${
    justCenter ? "justify-content-center" : `justify-content-${justifyContent}`
  } 
  ${alignCenter ? "align-items-center" : `align-items-${alignItems}`} 
  ${culumn ? "flex-column" : "flex-column"}
  ${className}
  `;
  return <div className={classes}>{children}</div>;
};

export default FlexBox;
