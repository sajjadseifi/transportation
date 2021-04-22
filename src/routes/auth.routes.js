//fc with react router dom
import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginScreen } from "../screens/auth";

const AuthRoutes = (props) => {

    return(
        <Switch>
            <Route exact path="/auth/login" component={LoginScreen} />
        </Switch>
    )
};

export default AuthRoutes;
