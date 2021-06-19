//default
import React from 'react'
import { Nav } from 'rsuite'
import { TabListComponent } from './tab.list.component'
import './tab.css'
const styles = {
  //   height: 40,
}
export const TabComponent = ({
  activeKey,
  reversed = false,
  appearance = 'subtle',
  vertical = false,
  tabs = [],
  handleSelect = () => {},
  ...props
}) => {
  console.log({ activeKey })
  return (
    <Nav
      className="tab-rs-nav"
      {...{ activeKey, vertical, appearance, ...props }}
      style={styles}
    >
      <TabListComponent
        reversed
        activeKey={activeKey}
        onSelect={handleSelect}
        tabs={tabs}
      />
    </Nav>
  )
}
