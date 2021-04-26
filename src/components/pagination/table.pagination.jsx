//default
import React from "react";
import "./pagination.scss";
import { TableArrowPagination } from ".";
import { useState } from "react";
import { useCallback } from "react";
const SIDE_NUMBER_PAGE = 3;
const TablePagination = ({
  maxPages = 20,
  pagex = 12,
  //   onSelect = (page) => {},
}) => {
  const [page, setPage] = useState(pagex);

  const onSelect = useCallback(
    (page) => {
      setPage(page);
    },
    [setPage]
  );

  let start = 1;
  let end = maxPages;
  const arrPage = [];

  if (maxPages > 5) {
    start = page - SIDE_NUMBER_PAGE;
    end = page + SIDE_NUMBER_PAGE;
    if (start < 1) {
      let spase = 1 - start;
      end = (spase + end) % (maxPages + 1);
      start = 1;
    }
    if (end > maxPages) {
      let spase = end - maxPages;
      start = start <= spase ? 1 : start - spase;
      end = maxPages;
    }
  }
  console.log({ end, start });
  [...Array(end - start)].map((_, i) => arrPage.push(start + i));

  return (
    <div className="table-pagination">
      <div className="pagination:container">
        {start > 1 && maxPages > 5 && (
          <TableArrowPagination
            onClick={() => onSelect(arrPage[arrPage.length - 1])}
            direction="right"
            afterText="قبلی"
          />
        )}
        {arrPage.map((i, index) => (
          <div
            onClick={() => onSelect(i)}
            key={index}
            className={`pagination:number  ${
              i == page ? "pagination:active" : ""
            }`}
          >
            {i}
          </div>
        ))}
        {end < maxPages && maxPages > 5 && (
          <TableArrowPagination
            onClick={() => onSelect(arrPage[0])}
            direction="left"
            prevText="بعدی"
          />
        )}
      </div>
    </div>
  );
};

export default TablePagination;
