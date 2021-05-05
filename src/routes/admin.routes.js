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
    UsersListAdminScreen,
    CarFormScreen, CarListScreen,
    DiscountListScreen, DiscountFormScreen,
    TicketFormScreen, TicketListScreen
} from "../screens";
import { UserInfoFormAdminScreen, UserInfoListAdminScreen } from "../screens/admin/user-info";

const AdminRoutes = ({ }) => {
    return (
        <FullLayout>
            <Switch>
                <ListRoute path="/admin/temp/list" component={TempListAdminScreen} />
                <FormRoute path="/admin/temp/form/:id?" component={TempFormAdminScreen} />

                <ListRoute path="/admin/users/list" component={UsersListAdminScreen} />
                <FormRoute path="/admin/users/form/:id?" component={UsersFormAdminScreen} />

                <ListRoute path="/admin/car/list" component={CarListScreen} />
                <FormRoute path="/admin/car/form/:id?" component={CarFormScreen} />

                <ListRoute path="/admin/discount/list" component={DiscountListScreen} />
                <FormRoute path="/admin/discount/form/:id?" component={DiscountFormScreen} />

                <ListRoute path="/admin/ticket/list" component={TicketListScreen} />
                <FormRoute path="/admin/ticket/form/:id?" component={TicketFormScreen} />

                <ListRoute path="/admin/user-info/list" component={UserInfoListAdminScreen} />
                <FormRoute path="/admin/user-info/form/:id?" component={UserInfoFormAdminScreen} />

                <Route exact path="/admin/dashboard" component={DashboardScreen} />
                <Route exact path="/admin/temp" component={DashboardScreen} />
                <Redirect to="/404" />
            </Switch>
        </FullLayout>
    )
};

export default AdminRoutes;
