import React from "react";
import { Sidenav, Nav } from "rsuite";
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
            {navigationSidebar.navigation.map((navItem, index) => (
              <NanItemSidebar key={index} index={index} {...navItem} />
            ))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;

/* <Nav>
            <Nav.Item
              eventKey="1"
              active
              icon={<Icon icon="dashboard" />}
            ></Nav.Item>
            <Dropdown
              eventKey="5"
              title="ماشین ها"
              icon={<Icon icon="magic" />}
            >
              <Dropdown.Item eventKey="5-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="5-5-2">Action Params</Dropdown.Item>
            </Dropdown>
            <Dropdown
              eventKey="6"
              title="ماشین ها"
              icon={<Icon icon="magic" />}>
              <Dropdown.Item  eventKey="6-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="6-5-2">Action Params</Dropdown.Item>
            </Dropdown>
          </Nav>
*/
