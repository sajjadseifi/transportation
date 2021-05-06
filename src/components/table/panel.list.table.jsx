//default
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { formActions, listActions } from "../../@redux/actions";
import { updateObject, updateRouteState } from "../../core/utils/utils";
import { HeaderPanelTable } from "./panel/header";
import FooterTablePanel from "./panel/footer/footer.panel.table";
import { ContentPanelTable } from "./panel/content";
import { formActionTypes } from "../../@redux/@types";
import { FormModel } from "../../models";

const options = {
  keyList: "panelList",
  title: "عنوان جدول",
  columns: [],
  getAgent: async () => {},
  builtOwnData: (data = []) => {},
  initialData: [],
  selections: {},
  managment: [],
  managmenHandler: (name, row) => {},
};
const PanelListTable = ({
  keyList,
  title,
  displayProperty = "",
  columns,
  builtOwnData = () => {
    return null;
  },
  getAgent,
  initialData,
  selections,
  managment = [],
  managmenHandler = (name, rowId) => {},
} = options) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { lists } = useSelector((state) => state.list);
  const [data, setData] = useState(initialData);
  const [start, setStart] = useState(true);
  const list = lists[keyList];
  const loading = list ? list.loading : true;
  const page = list && list.page ? list.page : 0;
  const maxPages = list && list.maxPages ? list.maxPages : 0;

  useEffect(() => {
    requestHandler();
  }, [dispatch, location.state]);

  useEffect(() => {
    if (loading || !list || !list.page || !list.maxPages) return;
    let l = list.data;
    if (builtOwnData) l = builtOwnData(lists[keyList]);

    setData(l);
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

  const managmentController = ({ name, rowId, agent = () => {} }) => {
    const data = lists[keyList].data;
    console.log({ rowId });
    console.log({ data });
    const rindex = [...data].findIndex(
      (t) => console.log(t.id) || t.id == rowId
    );
    if (rindex == -1) return;

    let dname = data[rindex][displayProperty];
    console.log({ name,dname });
    
    if (name == "delete") {
      const formModel = new FormModel(rowId, dname);
      dispatch(
        formActions.deleteFormQuestion(dname, formModel, agent, null, keyList)
      );
    }
  };
  return (
    <div className="px-5 py-5  text-muted-light">
      <HeaderPanelTable {...{ upateActionForm, selections, title }} />
      <ContentPanelTable
        {...{
          managmenHandler: managmentController,
          loading,
          data,
          columns,
          managment,
        }}
      />
      <FooterTablePanel
        requestHandler={requestHandler}
        upateActionForm={upateActionForm}
        {...{ loading, maxPages, page }}
      />
    </div>
  );
};

export default PanelListTable;
