import React from "react";
import { PanelListTable } from "../../components/table";
import { discountDetale } from "../../common/list";
import momentJalali from "moment-jalaali";
export const DiscountListScreen = () => {
  const builtOwnData = ({ data = [], errors, maxPages, page, loading }) => {
    const table = data.map((dt) => {
      const ds = !dt.description
        ? ""
        : dt.description.length > 20
        ? (dt.description + "").substr(0, 17) + "..."
        : dt.description;

      return {
        rowId: dt.id,
        code: dt.code,
        user: dt.uid,
        count: dt.count,
        price: <span>{dt.price + " ریال"}</span>,
        percent: <span>{dt.percent + "%"}</span>,
        expire_date: momentJalali(new Date(dt.expire_date)).format(
          "YYYY/MM/DD hh:mm:ss"
        ),
        description: <span>{ds}</span>,
      };
    });
    return table;
  };

  const props = {
    builtOwnData,
    ...discountDetale,
  };

  return <PanelListTable {...props} />;
};

export default DiscountListScreen;
