//default
import React, { useEffect, useState, Fragment } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { rolesLevel } from "../../constants";
import { roleType } from "../../constants/role";
const authorizex = {
  reverse: false,
  level: 0,
  rolesAccess: [],
  rolesNotAccess: [],
};
const NavItemSidebar = ({
  component: Component,
  Icon,
  children,
  route,
  title,
  index,
  items = [],
  authorize = authorizex,
}) => {
  const userRole = roleType.SUPPER_ADMIN;
  const history = useHistory();
  const [active, setActive] = useState(false);

  useEffect(() => {
    // const isActive = React.PropTypes.object.isRequired.isActive(route);

    // setActive(isActive);

    return () => setActive(false);
  }, [history]);
  const goToRoute = () => {
    history.push({
      pathname: route,
    });
  };

  if (authorize && authorize.level && authorize.level > rolesLevel[userRole])
    return <></>;

  const eventKey = index + "";
  if (children)
    return (
      <Component onClick={goToRoute.bind(route)} icon={Icon}>
        {children}
      </Component>
    );

  const icon = Icon;
  const className = items.length == 0 ? "none-sub-item" : "";
  return (
    <Component {...{ title, icon, eventKey, className }}>
      {items.map(
        (
          {
            component: Component,
            title,
            Icon,
            route: subRoute,
            authorize = authorizex,
          },
          subIndex
        ) => {
          const eventKey = index + "-" + subIndex;
          const active = false;

          if (
            authorize &&
            authorize.level &&
            authorize.level > rolesLevel[userRole]
          )
            return <Fragment key={eventKey}></Fragment>;

          return (
            <Component
              onClick={() => history.push({ pathname: subRoute })}
              key={eventKey}
              {...{ active, eventKey }}
            >
              {title}
            </Component>
          );
        }
      )}
    </Component>
  );
};

export default withRouter(NavItemSidebar);
