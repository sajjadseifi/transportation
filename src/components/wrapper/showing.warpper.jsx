//default
import React from "react";
const ShowingWrapper = ({ show = false, children }) => {
  if (show) return children;
  return null;
};

export default ShowingWrapper;
