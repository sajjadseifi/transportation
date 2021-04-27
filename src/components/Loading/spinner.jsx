//default
import React from "react";

const spinnerType = {
  crazy: "crazy",
  circle4: "circle4",
};

const Cirlce4Spinner = ({ name }) => {
  return <div className={`${spinnerType[name]}-loader`}></div>;
};

export default Cirlce4Spinner;
