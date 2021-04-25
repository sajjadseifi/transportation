//fc with react router dom
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NotFoundPage } from "../screens";
import AdminRoutes from "./admin.routes";
import AuthRoutes from "./auth.routes";
import { PrivateRoute } from "../components/router"
const Routes = (props) => {

    return (
        <Switch>
            <Route path="/404" component={NotFoundPage} />
            <Route path="/auth" component={AuthRoutes} />
            <Route path="/admin" component={AdminRoutes} />
            <Redirect to="/404" />
        </Switch>
    )
};

export default Routes;
