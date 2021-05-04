import React from "react";
import { Sidenav, Nav } from "rsuite";
import { Security } from "../../core/security";
import navigationSidebar from "../../configs/navigation.sidebar";
import { NanItemSidebar } from ".";
import { useSelector } from "react-redux";

const panelStyles = {
  padding: "15px 20px",
  color: "red",
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: "#34c3ff",
  color: " #fff",
};
const sidebarStyle = {
  width: 340,
};

const Sidebar = () => {
  const { activeSidebar } = useSelector((state) => state.menu);
  return (
    <div
      className={`panel-side-bar rsuite h-100 ${
        !activeSidebar ? "close-side-bar" : "active-side-bar"
      }`}
      style={!activeSidebar?{}:sidebarStyle}
    >
      <div className="side-bar-container rtl h-100" style={sidebarStyle}>
        <Sidenav
          className="rtl h-100"
          defaultOpenKeys={navigationSidebar.defaultOpenKeys}
        >
          <Sidenav.Body>
            <Nav>
              {navigationSidebar.navigation.map((navItem, index) => {
                const authorize = navItem.authorize || {};
                return (
                  <Security key={index} {...authorize}>
                    <NanItemSidebar index={index} {...navItem} />
                  </Security>
                );
              })}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
};

export default Sidebar;
