import React from "react";
import PanelListTable from "../../../components/table/panel.list.table";
import { userDetale } from "../../../common/list";
import momentJalali from "moment-jalaali";
export const UsersListAdminScreen = () => {
  const builtOwnData = ({ data = [], errors, maxPages, page, loading }) => {
    const table = data.map((dt) => {
      return {
        rowId: dt.id,
        username: dt.username,
        email: dt.email,
        fullName: dt.first_name + " " + dt.last_name,
        is_active: <span>{dt.is_active ? "فعال" : "غیر فعال"}</span>,
        is_superuser: <span>{dt.is_superuser ? "بله" : "خیر"}</span>,
        is_staff: <span>{dt.is_staff ? "بله" : "خیر"}</span>,
        date_joined: momentJalali(new Date(dt.date_joined)).format(
          "YYYY/MM/DD"
        ),
      };
    });

    return table;
  };

  const getDisplayNameFromRow = (row) => row.username;

  const props = {
    getDisplayNameFromRow,
    builtOwnData,
    ...userDetale,
  };

  return <PanelListTable {...props} />;
};

export default UsersListAdminScreen;
