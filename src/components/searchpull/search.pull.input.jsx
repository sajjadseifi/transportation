//default
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const SearchInput = ({
  pullRequest = (search) => {},
  value = "",
  title,
  id,
  ...props
}) => {
  const [search, setSearch] = useState();
  const [start, steStart] = useState(true);
  const [timeoutReq, setTimeoutReq] = useState(null);
  useEffect(() => {
    setSearch(value);
    return () => setSearch("");
  }, [value]);

  useEffect(() => {
    if (start) {
      steStart(false);
      return;
    }
    if (search == value) return;
    clearTimeout(timeoutReq);
    let TR = setTimeout(requestHandler, 500);
    setTimeoutReq(TR);
  }, [search]);

  const requestHandler = () => pullRequest(search);

  const onChangedInput = ({ target }) => {
    setSearch(target.value);
  };
  
  return (
    <div className="search-input-container">
      <div className={`form-group form-panel-group `}>
        <label
          className="form-control-label form-panel-label my-3"
          htmlFor={id}
        >
          {title}
        </label>
      </div>
      <input
        id={id}
        className="search-input"
        onChange={onChangedInput}
        value={search}
        {...props}

      />
    </div>
  );
};

export default SearchInput;
