import React from "react";
import { Link } from "react-router-dom";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";

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
  width: 300,
};

const Sidebar = () => {
  return (
    <div className="rsuite h-100" style={sidebarStyle}>
      <Sidenav className="rtl h-100" defaultOpenKeys={[]}>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
              داشبورد
            </Nav.Item>
            <Nav.Item
              style={{ direction: "rtl" }}
              eventKey="2"
              icon={<Icon icon="group" />}
            >
              کاربران
            </Nav.Item>
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
              icon={<Icon icon="magic" />}
            >
              <Dropdown.Item eventKey="6-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="6-5-2">Action Params</Dropdown.Item>
            </Dropdown>
            <Dropdown
              eventKey="3"
              title="ماشین ها"
              icon={<Icon icon="magic" />}
            >
              <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
              <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
              <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
