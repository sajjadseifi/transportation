//default
import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { SecurityLayout } from "../../layout";
import { roleType } from "../../constants/role";

const NavItemSidebar = ({
  component: Component,
  Icon,
  children,
  route,
  title,
  index,
  items = [],
}) => {
  const userRole = roleType.SUPPER_ADMIN;
  const history = useHistory();
  const [active, setActive] = useState(false);
  const eventKey = index + "";

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

  if (children)
    return (
      <Component onClick={goToRoute.bind(route)} icon={Icon}>
        {children}
      </Component>
    );

  return (
    <Component
      icon={Icon}
      className={items.length == 0 ? "none-sub-item" : ""}
      {...{ title, eventKey }}
    >
      {items.map(({ component, route,title, authorize }, subIndex) => {
        const eventKey = index + "-" + subIndex;
        const active = false;
        const Component = component;
        const subRoute = route;
        return (
          <SecurityLayout {...authorize}>
            <Component
              onClick={() => history.push({ pathname: subRoute })}
              key={eventKey}
              {...{ active, eventKey }}
            >
              {title}
            </Component>
          </SecurityLayout>
        );
      })}
    </Component>
  );
};

export default withRouter(NavItemSidebar);
