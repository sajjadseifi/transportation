//default
import React from "react";
import "./spinner.codepen.css";
const SquareSpinnerCodepen = ({ lable }) => {
  return (
    <div>
      <div class="spinner-box">
        <div class="configure-border-1">
          <div class="configure-core"></div>
        </div>
        <div class="configure-border-2">
          <div class="configure-core"></div>
        </div>
      </div>
      <div className="text-center">
        <h4>{lable}</h4>
      </div>
    </div>
  );
};

export default SquareSpinnerCodepen;
