import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginScreen } from "../screens/auth";

export const TiketRoutes = () => {
   return (
      <Switch>
         <Route path="/app/ticket/list?" component={LoginScreen} />
         <Route path="/app/ticket/create" component={LoginScreen} />
         <Route path="/app/ticket/overview/:ticketId" component={LoginScreen} />
      </Switch>
   )
};
