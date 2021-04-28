import React from "react";
import { Sidenav, Nav } from "rsuite";
import { SecurityLayout } from "../../layout";
import navigationSidebar from "../../configs/navigation.sidebar";
import { NanItemSidebar } from ".";
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

  return (
    <div className="rsuite h-100" style={sidebarStyle}>
      <Sidenav
        className="rtl h-100"
        defaultOpenKeys={navigationSidebar.defaultOpenKeys}
      >
        <Sidenav.Body>
          <Nav>
            {navigationSidebar.navigation.map((navItem, index) => {
              const authorize = navItem.authorize || {};
              return (
                <SecurityLayout {...authorize}>
                  <NanItemSidebar key={index} index={index} {...navItem} />
                </SecurityLayout>
              );
            })}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;