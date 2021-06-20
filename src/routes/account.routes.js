import React from "react";
import { Switch, Route } from "react-router-dom";
import { QueryRoute } from "../components/router";
import { AddressAccountScreen } from "../screens/account/address";
import { LoginScreen } from "../screens/auth";

export const AccountRoutes = () => {
    return (
        <Switch>
            <Route path="/app/account/profile" component={LoginScreen} />
            <QueryRoute overideNullVAue={{ tab: "list" }} queryList="tab" path="/app/account/address" component={AddressAccountScreen} />
            <Route path="/app/account/wallet" component={LoginScreen} />
            <Route path="/app/account/change-pass" component={LoginScreen} />
        </Switch>
    )
};