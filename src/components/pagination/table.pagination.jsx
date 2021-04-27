//default
import React from "react";
import "./pagination.scss";
import { TableArrowPagination } from ".";
const SIDE_NUMBER_PAGE = 2;

const TablePagination = ({
  maxPages = 20,
  page = 12,
  prevText = "قبلی",
  nextText = "بعدی",
  onSelect = (page) => {},
}) => {
  page = +page || 0;
  console.log({ page, maxPages });
  let start = 1;
  let end = maxPages || 0;
  let arrPage = [];
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
  [...Array(end - start + 1)].map((_, i) => arrPage.push(start + i));
  if (maxPages > 2 * (2 * SIDE_NUMBER_PAGE + 1)) {
    if (page * 2 > maxPages) arrPage = [1, 2, "...", ...arrPage];
    else arrPage = [...arrPage, "...", maxPages - 1, maxPages];
  }
  return (
    <div className="table-pagination">
      <div className="pagination:container">
        {start > 1 && maxPages > 5 && (
          <TableArrowPagination
            onClick={() => onSelect(page - 1)}
            direction="right"
            afterText={prevText}
          />
        )}
        <div className="d-flex">
          {arrPage.map((i, index) => {
            const nonPage = !(typeof i === "number");
            return (
              <div
                onClick={nonPage ? () => {} : () => onSelect(i)}
                key={index}
                className={`pagination:number  
              ${i === page ? "pagination:active" : ""}
              ${nonPage ? "pagination:none-page" : ""}
              `}
              >
                {i}
              </div>
            );
          })}
        </div>
        {end < maxPages && maxPages > 5 && (
          <TableArrowPagination
            onClick={() => onSelect(page + 1)}
            direction="left"
            prevText={nextText}
          />
        )}
      </div>
    </div>
  );
};

export default TablePagination;
