//default
import React, { useEffect, useState } from "react";
import { matchPath, useHistory, Router } from "react-router-dom";
const NavItemSidebar = ({
  component: Component,
  Icon,
  children,
  route,
  title,
  index,
  items = [],
}) => {
  const history = useHistory();
  const [active, setActive] = useState(false);

  useEffect(() => {
    // const isActive = React.PropTypes.object.isRequired.isActive(route);

    // setActive(isActive);

    return () => setActive(false);
  }, [history]);

  const eventKey = index + "";
  if (children) return <Component icon={Icon}>{children}</Component>;

  const icon = Icon;
  const className = items.length == 0 ? "none-sub-item" : "";
  return (
    <Component {...{ title, icon, eventKey, className }}>
      {items.map(({ component: Component, title, Icon, route }, subIndex) => {
        const eventKey = index + "-" + subIndex;
        const active = false;
        return (
          <Component  key={eventKey} {...{ active, eventKey }}>
            {title}
          </Component>
        );
      })}
    </Component>
  );
};

export default NavItemSidebar;
