import React from "react";
import { Redirect, Route } from "react-router-dom";
import queryString from "query-string";
import { history } from "../..";
const ListRoute = ({ component: Component, ...rest }) => {
  const qs = queryString.parse(rest.location.search);

  if (qs.pageNumber && qs.pageSize) {
    rest.location.state = {
      pageNumber: qs.pageNumber,
      pageSize: qs.pageSize,
      search: qs.search || "",
    };

    return <Route {...{ rest }} component={Component} />;
  }

  const pageNumber = qs.pageNumber ? +qs.pageNumber : 1;
  const pageSize = qs.pageSize ? +qs.pageSize : 5;
  const state = { pageNumber, pageSize };
  
  const search = "?" + queryString.stringify(state);
  const pathname = history.location.pathname;

  const redirect = { pathname, search, state };
  return <Redirect to={redirect} />;
};

export default ListRoute;
