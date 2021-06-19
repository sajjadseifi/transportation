//default
import React from 'react'
import { Icon, Nav } from 'rsuite'
export const TabItemComponent = ({ key, icon, children, ...props }) => {
  return (
    <Nav.Item
      {...{
        icon: icon ? <Icon icon={icon} /> : null,
      }}
      eventKey={key}
      {...props}
    >
      {children}
    </Nav.Item>
  )
}
