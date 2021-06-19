import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginScreen } from "../screens/auth";

export const AccountRoutes = () => {
    return (
        <Switch>
            <Route path="/app/account/profile" component={LoginScreen} />
            <Route path="/app/account/saved-address" component={LoginScreen} />
            <Route path="/app/account/wallet" component={LoginScreen} />
            <Route path="/app/account/change-pass" component={LoginScreen} />
        </Switch>
    )
};