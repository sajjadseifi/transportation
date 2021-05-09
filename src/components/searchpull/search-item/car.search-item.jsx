//default
import React from "react";
const CarSearchItme = ({ data, onSelect = (inpvalue, searchValue) => {} }) => {
  const { id, brand, name } = data;
  return (
    <div onClick={() => onSelect(id, name)} className="search-item">
      <div className="px-3 d-flex justify-content-between search-item-value">
        <span className="">{name}</span>
        <span className="">{brand}</span>
      </div>
    </div>
  );
};

export default CarSearchItme;
