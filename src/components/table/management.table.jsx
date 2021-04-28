//default
import React from "react";
import { Icon } from "rsuite";
import { SecurityLayout } from "../../layout";
const ManagementTable = ({
  name,
  authorize,
  icon = "",
  rowId,
  paramName,
  component,
  render,
}) => {
  const onSubmit = () => {
    console.log({ rowId, name });

    // const search = {
    //   pageNumber: location.state.pageNumber,
    //   pageSize: location.state.pageSize,
    //   search: location.state.search,
    //   [paramName]: rowId,
    // };
    // history.location.search = "?" + queryString.stringify(search);
  };

  return (
    <SecurityLayout {...authorize}>
      <span
        onClick={onSubmit}
        name={name}
        className="mx-2 cursor-pointer managment-talbe-icon"
      >
        {!icon ? name : <Icon icon={icon} />}
      </span>
    </SecurityLayout>
  );
};

export default ManagementTable;
