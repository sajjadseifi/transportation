//fc with react router dom
import React from "react";
import { Switch, Route } from "react-router-dom";

const AuthScreen = (props) => {
  reutnr(
    <Switch>
      <Route path="/auth/login" component={null} />
      {/* <Route path="/auth/sign-up" component={null} /> */}
      {/* <Route path="/auth/forget-password" component={null} /> */}
    </Switch>
  );
};

export default AuthScreen;
