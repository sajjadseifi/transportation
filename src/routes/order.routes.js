import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginScreen } from "../screens/auth";

export const OrderRoutes = () => {
   return (
      <Switch>
         {/* monitor=false&byRole=cuple&username=uname */}
         <Route path="/app/order/list" component={LoginScreen} />
         <Route path="/app/order/overviwe/:orderid" component={LoginScreen} />
         <Route path="/app/order/craete" component={LoginScreen} />
         <Route path="/app/order/update/:orderId" component={LoginScreen} />
         <Route path="/app/order/requests" component={LoginScreen} />
      </Switch>
   )
};