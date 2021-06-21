//default
import React, { useEffect, useState } from 'react'
import { FlexBox } from '../box'
import { Card } from '../card'
import { TabComponent } from '../tab/tab.component'
import { ContentTabCard } from '.'
const styles = {
  marginBottom: 50,
}
// const tabCard = {
//   key: '',
//   icon: '',
//   tabChildren: null,
//   component: () => <></>,
// }
export const TabCard = ({
  activeKey,
  vertical = false,
  onChangeTab = () => {},
  tabCards = [],
  backTabCards = [],
  handeled,
  ...props
}) => {
  const [active, setActive] = useState(activeKey)

  useEffect(() => {
    if (active !== activeKey) setActive(activeKey)
  }, [active, activeKey])

  const handleSelect = (newKey) => {
    if (handeled) setActive(newKey)
    if (newKey !== active) onChangeTab(newKey)
  }

  return (
    <Card>
      <TabComponent
        {...{
          activeKey: active,
          styles,
          tabs: tabCards,
          handleSelect,
          ...props,
        }}
      />
      <ContentTabCard
        backTablist={backTabCards}
        tabslist={tabCards}
        activedKey={active}
      />
    </Card>
  )
}
