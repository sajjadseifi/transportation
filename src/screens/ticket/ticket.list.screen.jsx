import React from "react";
import { PanelListTable } from "../../components/table";
import { ticketDetale } from "../../common/list";
import momentJalali from "moment-jalaali";
export const TicketListScreen = () => {
  const builtOwnData = ({ data = [], errors, maxPages, page, loading }) => {
    const table = data.map((dt) => {
      const ds = !dt.description
        ? ""
        : dt.description.length > 20
        ? (dt.description + "").substr(0, 17) + "..."
        : dt.description;

      const rds = !dt.response
        ? ""
        : dt.response.length > 20
        ? (dt.response + "").substr(0, 17) + "..."
        : dt.response;

      return {
        rowId: dt.id,
        title: dt.title,
        description: <span>{ds}</span>,
        response: <span>{rds}</span>,
        customer: dt.customer,
        expert: dt.expert?dt.expert:"ندارد",
        condition: <span>{!dt.expert ? "در انتظار" : "پاسخ داده شد"}</span>,
        // expire_date: momentJalali(new Date(dt.expire_date)).format(
        //   "YYYY/MM/DD hh:mm:ss"
        // ),
      };
    });
    return table;
  };

  const props = {
    builtOwnData,
    ...ticketDetale,
  };

  return <PanelListTable {...props} />;
};

export default TicketListScreen;
