//fc with react router dom
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DashboardScreen } from "../screens";

const AdminRoutes = (props) => {

    return (
        <Switch>
            <Route exact path="/admin/dashboard" component={DashboardScreen} />
            <Redirect to="/404" />
        </Switch>
    )
};

export default AdminRoutes;
