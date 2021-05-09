//default
import React from "react";
const UsersSearchItme = ({
  data,
  onSelect = (inpvalue, searchValue) => {},
}) => {
  const { id, username, first_name, last_name } = data;
  const fullName = `${first_name} ${last_name}`;
  return (
    <div onClick={() => onSelect(id, username)} className="search-item">
      <div className="px-3 d-flex justify-content-between search-item-value">
        <span className="" >{username}</span>
        <span className="" >{fullName}</span>
      </div>
    </div>
  );
};

export default UsersSearchItme;
