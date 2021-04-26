import React from "react";
import { ListTable } from "../../../components/table";
import { useHistory } from "react-router-dom";

export const TempListAdminScreen = () => {
  const history = useHistory();

  const { pageNumber, pageSize, search } = history.location.state;

  return (
    <div>
      <h3>TempListAdminScreen</h3>
      <div>
        <span>{pageNumber}</span>,<span>{pageSize}</span>
      </div>
      <ul>
        <ListTable />
      </ul>
    </div>
  );
};

export default TempListAdminScreen;
