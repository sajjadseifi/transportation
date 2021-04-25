//fc with react router dom
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ListRoute, FormRoute} from "../components/router";
import { FullLayout } from "../layout";
import { DashboardScreen, TempListAdminScreen, TempFormAdminScreen } from "../screens";

const AdminRoutes = (props) => {

    return (
        <FullLayout>
            <Switch>
                <ListRoute path="/admin/list" component={TempListAdminScreen} />
                <FormRoute path="/admin/form(/:id)?" component={TempFormAdminScreen} />
                <Route exact path="/admin/dashboard" component={DashboardScreen} />
                <Route exact path="/admin/temp" component={DashboardScreen} />
                <Redirect to="/404" />
            </Switch>
        </FullLayout>
    )
};

export default AdminRoutes;
