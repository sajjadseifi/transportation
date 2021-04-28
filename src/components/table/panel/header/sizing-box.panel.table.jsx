//default
import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { SelectionDropDown } from "../../../UI/dropdown";
const SizingBoxPanelTable = ({ selections, upateActionForm = (opt) => {} }) => {
  const location = useLocation();

  //send onchange size page
  const onChagePageSize = useCallback((size) => {
      const newSatate = { pageSize: size, pageNumber: 1 };
      upateActionForm(newSatate);
    },
    [location]
  );

  return (
    <div className="category-picker">
      <SelectionDropDown
        selected={location.state.pageSize}
        items={selections.size}
        title="اندازه لیست"
        // trigger={["click", "hover"]}
        trigger="click"
        onSelect={onChagePageSize}
      />
    </div>
  );
};

export default SizingBoxPanelTable;
