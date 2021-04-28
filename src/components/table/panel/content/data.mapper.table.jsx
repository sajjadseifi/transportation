import React from "react";
import ManagementTable from "../../management.table";
import { managmentCol } from "../../../../common/list/culumn";

export default function DataMapperTable({
  managment = [],
  columns = [],
  data = [],
  children:Componet
}) {
  let cols = [...columns];
  let rows = data instanceof Array ? [...data] : [];
  if (managment.length > 0) {
    cols.push(managmentCol);

    rows = rows.map((rd) => {
      const rowId = rd.rowId || 10;
      const managmentsCmp = managment.map((props, index) => (
        <ManagementTable key={index} rowId={rowId} {...props} />
      ));

      return {
        ...rd,
        managment: <div className="managment-talbe-box">{managmentsCmp}</div>,
      };
    });
  }
  return <Componet columns={cols} data={rows} />;
}
