import React from 'react'
import { TabItemComponent } from './tab.item.component'

export const TabListComponent = ({ activeKey, onSelect, tabs = [] }) => {
  return tabs.map((tb, index) => (
    <TabItemComponent
      onSelect={onSelect}
      activeKey={activeKey}
      key={index}
      {...tb}
      eventKey={tb.key}
    />
  ))
}
