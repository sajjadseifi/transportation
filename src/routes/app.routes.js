import React from "react";
import { Switch, Route } from "react-router-dom";
import { OrderRoutes, TiketRoutes, AccountRoutes } from "."
import { FullLayout } from "../layout";
const AppRoutes = () => {

    return (
        <FullLayout>
            <Switch>
                <Route path="/app/account" component={AccountRoutes} />
                <Route path="/app/order" component={OrderRoutes} />
                <Route path="/app/ticket" component={TiketRoutes} />
            </Switch>
        </FullLayout>
    )
};

export default AppRoutes;