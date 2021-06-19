//default
import React from 'react'
import { Icon, Nav } from 'rsuite'
export const TabItemComponent = ({
  onSelect,
  eventKey,
  activeKey,
  icon,
  tabChildren,
  ...props
}) => {
  const activedCls = eventKey === activeKey ? 'rs-nav-item-active' : ''
  return (
    <Nav.Item
      className={`${activedCls} ltr`}
      onSelect={() => onSelect(eventKey)}
      {...{
        icon: icon ? <Icon icon={icon} /> : null,
      }}
      eventKey={eventKey}
      {...props}
    >
      {tabChildren}
    </Nav.Item>
  )
}
