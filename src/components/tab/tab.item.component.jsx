//default
import React from 'react'
import { Icon, Nav } from 'rsuite'
export const TabItemComponent = ({ key, icon, children }) => {
  const prop = {
    eventKey: key,
    icon: null,
  }
  if (icon) {
    prop.icon = <Icon icon={icon} />
  }

  return <Nav.Item {...prop}>{children}</Nav.Item>
}
