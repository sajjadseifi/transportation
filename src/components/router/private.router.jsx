import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const PrivateRoute = ({ role = [] || "", component: Component, ...rest }) => {
  const token = "";
  const path = "/";
  const { loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  //if loaing...
  if (loading) return loading;

  //   if (false)
  //     if (!userInfo || !userInfo.user.role)
  //       return <Redirect to={path} state={{ from: props.location }} />;

  //   const access =
  //     role instanceof Array
  //       ? role.includes(userInfo.user.role)
  //       : userInfo.user.role;

  //   if (access) return <Route {...rest} component={Component} />;

  console.log("HI I AM A MEGA");
  return null;
};

export default PrivateRoute;
