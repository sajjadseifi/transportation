//default
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ListTable } from ".";
import { listActions } from "../../@redux/actions";
import { TablePagination } from "../pagination";

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
  const { lists } = useSelector((state) => state.list);
  const [data, setData] = useState(initialData);

  const list = lists[keyList];
  const loading = list ? list.loading : true;
  const page = list && list.page ? list.page : 0;
  const maxPages = list && list.maxPages ? list.maxPages : 0;

  useEffect(() => {
    const getOptinos = {
      keyList,
      agentGet: getAgent,
      pageNumber: location.state.pageNumber,
      pageSize: location.state.pageSize,
    };

    dispatch(listActions.loadList(getOptinos));
  }, [dispatch, location]);

  useEffect(() => {
    let dlist = null;
    if (!list) return;

    if (!list.page || !list.maxPages) return;

    if (loading) return;

    if (builtOwnData) dlist = builtOwnData(lists[keyList]);

    dlist = !dlist ? lists[keyList].data : dlist;

    console.log({ keyList: lists[keyList] });

    setData(dlist);
    return () => setData([]);
  }, [lists, keyList]);

  const onSelectPage = useCallback((page) => {
    //get new page item...
  }, []);
  return (
    <div className="px-5 py-5">
      <header>
        <h3 className="title px-4">{title}</h3>
      </header>
      <section className="">
        <ListTable {...{ data, columns }} />
      </section>
      <footer>
        {!loading && (
          <TablePagination onSelect={onSelectPage} {...{ maxPages, page }} />
        )}
      </footer>
    </div>
  );
};

export default PanelListTable;
