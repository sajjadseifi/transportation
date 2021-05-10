//default
import React, { Fragment } from "react";
import momentJalali from "moment-jalaali";
import "./table.scss";
momentJalali.locale("fa");

const ListTable = ({ columns = [], data = [], onClickRow = (row) => {} }) => {
  let ckeys = {};
  const TableHeade = columns.map(({ displayName, id }, index) => {
    ckeys[id] = displayName;
    return <th key={id + index}>{displayName}</th>;
  });
  const TableBody = data.map((d, index) => (
    <tr key={index} onClick={() => onClickRow(d)}>
      {Object.keys(d).map((ck, infex) => (
        <Fragment key={infex + ck}>
          {ckeys[ck] && <td data-th={ckeys[ck]}>{d[ck]}</td>}
        </Fragment>
      ))}
    </tr>
  ));
  return (
    <div>
      <table className="rwd-table">
        <thead>
          <tr key="TableHeade">{TableHeade}</tr>
        </thead>
        <tbody>{TableBody}</tbody>
      </table>
    </div>
  );
};

export default ListTable;
