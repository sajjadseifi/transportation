//default
import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import {TablePagination} from "../../../pagination"
const FooterTablePanel = ({
  loading = false,
  maxPages = 0,
  page = 0,
  upateActionForm = () => {},
  requestHandler = () => {},
}) => {
  const location = useLocation();

  //psh new history for new page
  const onSelectPage = useCallback(
    (page) => {
      //get new page item...
      upateActionForm({ pageNumber: page });
    },
    [location]
  );

  return (
    <footer className="py-4 d-flex align-items-start justify-content-between">
      <div>
        <TablePagination onSelect={onSelectPage} {...{ maxPages, page }} />
        <div className="p-3 p-2">
          <div>{`تعداد کل صفحات : ${maxPages}`}</div>
          {loading && maxPages != 0 && (
            <div className="py-3">{`درحال بارگزاری صفحه ${location.state.pageNumber} ...`}</div>
          )}
        </div>
      </div>
      {!loading && (
        <h6 onClick={requestHandler} className="cursor-pointer">
          بارگیری مجدد
        </h6>
      )}
    </footer>
  );
};

export default FooterTablePanel;
