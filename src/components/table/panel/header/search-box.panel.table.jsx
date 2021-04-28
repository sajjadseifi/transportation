//default
import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { IconSearchBox } from "../../../UI/searchbox";
const SearchBoxPanelTable = ({ upateActionForm = (opt) => {} }) => {
  const location = useLocation();
  //send search value...
  const onSubmitedSearch = useCallback(
    (search) => {
      const newSatate = { search, pageNumber: 1 };
      upateActionForm(newSatate);
    },
    [location]
  );

  return (
    <div className="search-box">
      <IconSearchBox
        placeholder="جستوجو"
        value={location.state.search}
        onSubmited={onSubmitedSearch}
      />
    </div>
  );
};

export default SearchBoxPanelTable;
