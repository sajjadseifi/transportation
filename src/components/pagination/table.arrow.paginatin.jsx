//default
import React from "react";
const TableArrowPagination = ({
  direction = "left" || "right",
  afterText = "",
  prevText = "",
  onClick = () => {},
}) => {
  return (
    <div>
      <div onClick={onClick} className="pagination:number arrow">
        {prevText && <span className="arrow:text">{prevText}</span>}
        <svg width="18" height="18">
          <use xlinkHref={`#${direction}`} />
        </svg>
        {afterText && <span className="arrow:text">{afterText}</span>}
      </div>
      <svg className="hide">
        <symbol
          id="left"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </symbol>
        <symbol
          id="right"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </symbol>
      </svg>
    </div>
  );
};

export default TableArrowPagination;
