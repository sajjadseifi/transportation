//default
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import security, { useSecurity } from "../core/security";

export const props = {
  reverse: false, //defult if revers access section lower level and  high level is not access thi part
  role: "_____ROLE_USER____", // level for index ,
  levelRevers: false, //default reevers false if your check lower level youser set this proprty to true
  levelInRole: 0, //level of user in your role
  rolesAccess: [], //acces this section
  rolesNotAccess: [], //not access this section
  user: null,
  children: null,
  compoent: <></>,
  render: () => {},
};

const Security = ({
  reverse = false,
  role = "_____ROLE_USER____",
  levelRevers = false,
  levelInRole = 0,
  rolesAccess = [],
  rolesNotAccess = [],
  customUser = null,
  compoent = <></>,
  render = () => {},
  children,
} = props) => {
  const [authorized, setAuthorized] = useState(false);
  const { state } = useSecurity();
  let Component = authorized ? children : null;
  //get a as redux storage or storage

  useEffect(() => {
    //authorize options
    const authorizeOptions = {
      rolesNotAccess,
      rolesAccess,
      reverse,
      role,
      levelRevers,
      levelInRole,
    };
    //generate payload options
    const config = {
      origin: authorizeOptions, //compoent rendered in authorize setting
      options: state.options, //roles setting...
      user: customUser || state.user, //user role and role in level
    };
    //sned payout to check authorized
    security.checkAuthorization(config, authorizationHanle);
  }, [rolesNotAccess, rolesAccess, reverse, role, levelRevers, levelInRole]);

  const authorizationHanle = (isAuthorize) => {
    if (isAuthorize) setAuthorized(true);
  };

  return <Fragment>{Component}</Fragment>;
};

export default Security;
