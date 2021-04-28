//default
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Icon } from "rsuite";
const TablePanelSearchBox = ({
  value,
  placeholder,
  onSubmited = (search) => {},
}) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);

    return () => setState("");
  }, [value]);

  return (
    <div className="search-box table-panel">
      <input
        value={state}
        onChange={({ target: { value } }) => setState(value)}
        placeholder={placeholder}
        className="py-3 px-1 pl-4"
      />
      <div onClick={() => onSubmited(state)} className="icon-search">
        <Icon icon="search" />
      </div>
    </div>
  );
};

export default TablePanelSearchBox;
