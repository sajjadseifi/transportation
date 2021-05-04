//default
import React from "react";
import { OptionSelect } from ".";
import { ListMapper } from "../../mapper";
import { templateSelectOptions as opts } from "./template-data";
import "./select.scss";
const CodePenSelect = ({ name,baseLabel}) => {
  return (
    <div id="app-cover">
      <div id="select-box">
        <input type="checkbox" id="options-view-button" />
        <div id="select-button" class="brd">
          <div id="selected-value">
            <span>{baseLabel}</span>
          </div>
          <div id="chevrons">
            <i class="fas fa-chevron-up"></i>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div id="options">
          <ListMapper list={opts}>
            {({ item, index }) => <OptionSelect {...item} />}
          </ListMapper>
          <div id="option-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default CodePenSelect;
