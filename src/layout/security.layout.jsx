//default
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import security from "../core/security";
import { rolesLevel, roleType } from "../core/security/roles.security";
export const props = {
  reverse: false, //defult if revers access section lower level and  high level is not access thi part
  level: 0, // level for index
  rolesAccess: [], //acces this section
  rolesNotAccess: [], //not access this section,
  children: null,
};

const SecurityLayout = ({
  rolesNotAccess = [],
  rolesAccess = [],
  reverse = false,
  level = 0,
  children,
} = props) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  let Component = authorized ? children : null;
  //get a as redux storage or storage
  const user = {
    role: roleType.USER_ADMIN,
    level: rolesLevel[roleType.USER_ADMIN],
  };

  useEffect(() => {
    //authorize options
    const authorizeOptions = { rolesNotAccess, rolesAccess, reverse, level };
    //generate payload options
    const options = { origin: authorizeOptions, user };
    //sned payout to check authorized
    security.checkAuthorization(options, authorizationHanle);
  }, [rolesNotAccess, rolesAccess, reverse, level]);

  const authorizationHanle = (isAuthorize) => {
    setLoading(false);

    if (isAuthorize) setAuthorized(true);
  };

  if (loading) return "loading...";

  return <Fragment>{Component}</Fragment>;
};

export default SecurityLayout;
