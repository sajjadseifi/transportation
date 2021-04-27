//default
import momentJalali from "moment-jalaali";
import React from "react";
import "./table.scss";
momentJalali.locale("fa");
export const table = {
  culumns: [
    {
      id: "name",
      displayName: "نام",
    },
    {
      id: "code",
      displayName: "کد",
    },
    {
      id: "price",
      displayName: "قیمت",
    },
    {
      id: "date",
      displayName: "تاریخ",
    },
  ],
  data: [
    {
      name: "سبزینه",
      code: "FC-402",
      price: 5000,
      date: momentJalali().format("YYYY/MM/DD"),
    },
    {
      name: "همبرگرز",
      code: "ًَ213ُSQ",
      price: 8500,
      date: momentJalali().format("YYYY/MM/DD"),
    },
    {
      name: "کمپرستور",
      code: "RS-45",
      price: 885500,
      date: momentJalali().format("YYYY/MM/DD"),
    },
    {
      name: "سولاریوم",
      code: "B-V4578",
      price: 563214,
      date: momentJalali().format("YYYY/MM/DD"),
    },
  ],
};
const ListTable = ({
  columns = [],
  data = [],
  onClickRow = (row) => {},
  tableClassName,
  trClassName,
  thClassName,
  hraderClasses,
  tdClassName,
}) => {
  const TableHeade = columns.map(({ displayName, id }, index) => (
    <th key={id + index} key={id}>
      {displayName}
    </th>
  ));
  const TableBody = data.map((d, index) => (
    <tr key={index} onClick={() => onClickRow(d)}>
      {Object.keys(d).map((ck, infex) => (
        <td key={infex} data-th={ck}>
          {d[ck]}
        </td>
      ))}
    </tr>
  ));
  return (
    <div>
      <table className="rwd-table">
        <tr key="TableHeade">{TableHeade}</tr>
        {TableBody}
      </table>
    </div>
  );
};

export default ListTable;
