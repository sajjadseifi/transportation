import React from 'react'
import { TabItemComponent } from './tab.item.component'

export const TabListComponent = (tabs = []) =>
  tabs.map((tb, index) => <TabItemComponent key={index} {...tb} />)
