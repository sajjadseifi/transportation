//fc with react router dom
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ListRoute, FormRoute } from "../components/router";
import { FullLayout } from "../layout";
import {
    DashboardScreen,
    TempListAdminScreen,
    TempFormAdminScreen,
    UsersFormAdminScreen,
    UsersListAdminScreen
} from "../screens";

const AdminRoutes = (props) => {

    return (
        <FullLayout>
            <Switch>
                <ListRoute path="/admin/temp/list" component={TempListAdminScreen} />
                <FormRoute path="/admin/temp/form/:id?" component={TempFormAdminScreen} />

                <ListRoute path="/admin/users/list" component={UsersListAdminScreen} />
                <FormRoute path="/admin/users/form/:id?" component={UsersFormAdminScreen} />

                <Route exact path="/admin/dashboard" component={DashboardScreen} />
                <Route exact path="/admin/temp" component={DashboardScreen} />
                <Redirect to="/404" />
            </Switch>
        </FullLayout>
    )
};

export default AdminRoutes;
