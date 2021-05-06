//default
import React from "react";
import { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { Icon } from "rsuite";
import { Security } from "../../core/security";
const ManagementTable = ({
  name,
  authorize,
  icon = "",
  rowId,
  paramName,
  component,
  render,
  path,
  data,
  agent = () => {},
  onSubmit: onSubmited,
}) => {
  const onSubmit = () => {
    onSubmited({ name, rowId, agent });
  };

  const CMP = path ? Link : Fragment;

  let props = {};

  if (path) {
    props.className = "ancor-icon";
    props.to = `${path}/${rowId}`;
  }

  return (
    <Security {...authorize}>
      <CMP {...props}>
        <span
          onClick={onSubmit}
          name={name}
          className="mx-2 cursor-pointer managment-talbe-icon"
        >
          {!icon ? name : <Icon icon={icon} />}
        </span>
      </CMP>
    </Security>
  );
};

export default ManagementTable;
