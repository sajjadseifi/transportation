//default
import React from 'react'
import { Icon, Nav } from 'rsuite'
import { FlexBox } from '../box'
import { NinjaConditionWrappr as NinWrap } from '../wrapper'
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
      eventKey={eventKey}
      {...props}
    >
      <FlexBox justCenter alignCenter>
        {tabChildren}
        <NinWrap condition={icon}>
          <div>
            <span className="p-1"></span>
            <Icon icon={icon} />
          </div>
        </NinWrap>
      </FlexBox>
    </Nav.Item>
  )
}
