//default
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { ListTable } from ".";
import { listActions } from "../../@redux/actions";
import { HealthyLoading } from "../loading";
import { TablePagination } from "../pagination";
import { FlexBox } from "../box";
import queryString from "query-string";
import SelectionDropDown from "../UI/dropdown/selection.dropdown";
import { updateRouteState } from "../../core/utils/utils";
const options = {
  keyList: "panelList",
  title: "عنوان جدول",
  columns: [],
  getAgent: async () => {},
  builtOwnData: (data = []) => {},
  initialData: [],
};
const PanelListTable = ({
  keyList,
  title,
  columns,
  builtOwnData = () => {
    return null;
  },
  getAgent,
  initialData,
} = options) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { lists } = useSelector((state) => state.list);
  const [data, setData] = useState(initialData);

  const list = lists[keyList];
  const loading = list ? list.loading : true;
  const page = list && list.page ? list.page : 0;
  const maxPages = list && list.maxPages ? list.maxPages : 0;

  useEffect(() => {
    requestHandler();
  }, [dispatch, location]);

  useEffect(() => {
    if (!list) return;

    if (!list.page || !list.maxPages) return;

    if (loading) return;

    if (builtOwnData) list.data = builtOwnData(lists[keyList]);

    setData(list.data);
    return () => setData([]);
  }, [lists, keyList]);

  //psh new history for new page
  const onSelectPage = useCallback((page) => {
    //get new page item...
    const state = {
      pageSize: location.state.pageSize,
      pageNumber: page,
    };
    console.log(state);

    updateRouteState(history, state);
  }, []);
  //
  const onChagePageSize = useCallback((size) => {
    const state = {
      pageNumber: location.state.pageNumber,
      pageSize: size,
    };
    updateRouteState(history, state);
  }, []);
  //send rqeuest with multy options
  const requestHandler = useCallback(
    (size) => {
      const getOptinos = {
        keyList,
        agentGet: getAgent,
        pageNumber: location.state.pageNumber,
        pageSize: location.state.pageSize,
      };
      console.log({ getOptinos });

      dispatch(listActions.loadList(getOptinos));
    },
    [dispatch, location]
  );

  return (
    <div className="px-5 py-5  text-muted-light">
      <header>
        <h3 className="title px-4">{title}</h3>
      </header>
      <section className="">
        {loading && true ? (
          <FlexBox className="py-5 my-5" alignCenter justCenter>
            <HealthyLoading />
          </FlexBox>
        ) : (
          <div className="full-table">
            <FlexBox
              alignCenter
              justifyContent="between"
              className="p-5 py-0 pt-5"
            >
              <div className="search-box">
                <input
                  placeholder="جستوجو"
                  className="py-3 px-1"
                  style={{ borderBottom: "1px solid #b5b8bb" }}
                />
              </div>
              <div className="category-picker">
                <SelectionDropDown
                  selected={location.state.pageSize}
                  items={[5, 10, 15, 20]}
                  title="اندازه لیست"
                  trigger={["click", "hover"]}
                  onSelect={onChagePageSize}
                />
              </div>
            </FlexBox>
            <ListTable {...{ data, columns }} />
          </div>
        )}
      </section>
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
          <h5 onClick={requestHandler} className="cursor-pointer">
            بارگیری مجدد
          </h5>
        )}
      </footer>
    </div>
  );
};

export default PanelListTable;
