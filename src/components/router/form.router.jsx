import React from "react";
import { Route } from "react-router-dom";
const FormRoute = ({ component: Component, ...rest }) => {
  
  return <Route {...rest} component={Component} />;
};

export default FormRoute;
