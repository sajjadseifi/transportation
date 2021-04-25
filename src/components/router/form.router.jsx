import React from "react";
import { Route } from "react-router-dom";
const FormRoute = ({ component: Component, ...rest }) => {
  console.log({ location: rest.location });
  // const formId = rest.location.params.id;

  rest.location.state = {
    formId: "",
  };

  return <Route {...{ rest }} component={Component} />;
};

export default FormRoute;
