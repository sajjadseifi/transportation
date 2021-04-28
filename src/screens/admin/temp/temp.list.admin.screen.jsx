import React from "react";
import PanelListTable from "../../../components/table/panel.list.table";
import { table as T } from "../../../components/table/list.table";
import { tempDetale } from "../../../common/list";
import momentJalali from "moment-jalaali";
export const TempListAdminScreen = () => {
  //   "topics": [
  //     "front",
  //     "javascript",
  //     "typescript"
  // ],
  // "_id": "6088c9209a1ebd2d6878fc58",
  // "courseName": "AngularJs Rookie",
  // "description": "very difficult but easy",
  // "image": "thisfolder.jpg",
  // "createDate": "2021-04-28T02:32:00.219Z",
  // "terms": [],
  const builtOwnData = ({ data = [], errors, maxPages, page, loading }) => {
    console.log("table.data", data);
    const table = data.map((dt) => {
      return {
        name: dt.courseName,
        code: dt._id,
        price:  Math.floor(new Date().getTime() / 10000) + " ریال ",
        date: momentJalali(new Date(dt.createDate)).format("YYYY/MM/DD"),
      };
    });

    return table;
  };

  return <PanelListTable {...tempDetale} builtOwnData={builtOwnData} />;
};

export default TempListAdminScreen;
