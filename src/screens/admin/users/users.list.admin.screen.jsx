import React from "react";
import PanelListTable from "../../../components/table/panel.list.table";
import { userDetale } from "../../../common/list";
import momentJalali from "moment-jalaali";
export const UsersListAdminScreen = () => {
  const builtOwnData = ({ data = [], errors, maxPages, page, loading }) => {
    const table = data.map((dt) => {
      return {
        rowId: dt._id,
        username: dt.username,
        email: dt.email,
        fullName: dt.first_name + " " + dt.last_name,
        is_active: <div>{dt.is_active ? "بله" : "خیر"}</div>,
        is_superuser: <div>{dt.is_superuser ? "بله" : "خیر"}</div>,
        date_joined: momentJalali(new Date(dt.date_joined)).format(
          "YYYY/MM/DD"
        ),
      };
    });

    return table;
  };

  return <PanelListTable {...userDetale} builtOwnData={builtOwnData} />;
};

export default UsersListAdminScreen;