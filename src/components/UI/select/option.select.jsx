//default
import React from "react";
const OptionSelect = ({ icon, name, value, label, optVal, color }) => {
  return (
    <div id="options">
      <div className="option">
        <input className="s-c top" type="radio" name={name} value={value} />
        <input className="s-c bottom" type="radio" name={name} value={value} />
        <i className="fab fa-codepen"></i>
        <span className="label">{label}</span>
        <span className="opt-val">{optVal}</span>
      </div>
    </div>
  );
};

export default OptionSelect;
