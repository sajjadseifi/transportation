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
import { updateObject, updateRouteState } from "../../core/utils/utils";
import { managmentCol } from "../../common/list/culumn";
import ManagementTable from "./management.table";
import {
  SizingBoxPanelTable,
  SearchBoxPanelTable,
  HeaderPanelTable,
} from "./panel/header";
import FooterTablePanel from "./panel/footer/footer.panel.table";
import { ContentPanelTable } from "./panel/content";

const options = {
  keyList: "panelList",
  title: "عنوان جدول",
  columns: [],
  getAgent: async () => {},
  builtOwnData: (data = []) => {},
  initialData: [],
  selections: {},
  managment: [],
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
  selections,
  managment = [],
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
  }, [dispatch, location.state]);

  useEffect(() => {
    if (loading || !list || !list.page || !list.maxPages) return;

    if (builtOwnData) list.data = builtOwnData(lists[keyList]);

    setData(list.data);
    return () => setData([]);
  }, [lists, keyList]);

  //#region handleling changes actions
  const upateActionForm = useCallback(
    (targetObject) => {
      const state = { ...location.state };
      const updatedState = updateObject(state, targetObject);

      updateRouteState(history, updatedState);
    },
    [location]
  );
  //#endregion

  //send rqeuest with multy options
  const requestHandler = useCallback(() => {
    const getOptinos = {
      keyList,
      agentGet: getAgent,
      pageNumber: location.state.pageNumber,
      pageSize: location.state.pageSize,
    };
    dispatch(listActions.loadList(getOptinos));
  }, [dispatch, location]);

  return (
    <div className="px-5 py-5  text-muted-light">
      <HeaderPanelTable {...{ upateActionForm, selections, title }} />
      <ContentPanelTable {...{ loading, data, columns, managment }} />
      <FooterTablePanel
        requestHandler={requestHandler}
        upateActionForm={upateActionForm}
        {...{ loading, maxPages, page }}
      />
    </div>
  );
};

export default PanelListTable;
