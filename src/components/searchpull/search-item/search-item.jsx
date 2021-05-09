//default
import React from "react";
const SearchItme = ({ data, onSelect = (inpvalue, searchValue) => {} }) => {
  const { key, value } = data;

  return (
    <div onClick={() => onSelect(key, value)} className="search-item">
      <span className="search-item-value">{value}</span>
    </div>
  );
};

export default SearchItme;
