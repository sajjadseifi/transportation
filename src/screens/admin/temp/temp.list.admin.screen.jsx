import React from "react";

import { useHistory } from "react-router-dom";

export const TempListAdminScreen = () => {
  const history = useHistory();

  const { pageNumber, pageSize, search } = history.location.state;

  console.log({ search });
  return (
    <div>
      <h3>TempListAdminScreen</h3>
      <div>
        <span>{pageNumber}</span>,<span>{pageSize}</span>
      </div>
      <ul>Body</ul>
    </div>
  );
};

export default TempListAdminScreen;
