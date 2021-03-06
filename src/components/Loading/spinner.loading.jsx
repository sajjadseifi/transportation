//default
import React from "react";

export const spinnerType = {
  crazy: "crazy",
  circle4: "circle4",
};

const SpinnerLoading = ({ name }) => {
  return <div className={`${spinnerType[name]}-loader`}></div>;
};

export default SpinnerLoading;
