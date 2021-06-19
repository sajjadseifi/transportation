import React from "react";
import { Switch, Route } from "react-router-dom";
import { OrderRoutes, TiketRoutes, AccountRoutes } from "."
const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/app/account" component={AccountRoutes} />
            <Route path="/app/order" component={OrderRoutes} />
            <Route path="/app/ticket" component={TiketRoutes} />
        </Switch>
    )
};

export default AppRoutes;