import React from "react";
import PanelListTable from "../../../components/table/panel.list.table";
import { table } from "../../../components/table/list.table";
import { tempDetale } from "../../../common/list";

export const TempListAdminScreen = () => {
 
  const builtOwnData = (data = []) => {
    alert("table.data");
    return table.data;
  };

  return <PanelListTable {...tempDetale} builtOwnData={builtOwnData} />;
};

export default TempListAdminScreen;
