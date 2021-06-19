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
  reversed = false,
  vertical = false,
  appearance = 'subtle',
  onChangeTab = () => {},
  tabcards = [],
}) => {
  const [active, setActive] = useState(activeKey)

  useEffect(() => {
    console.log({ activeKey })
    setActive(activeKey)
  }, [])

  const handleSelect = (newKey) => {
    setActive(newKey)
    if (newKey !== active) onChangeTab(newKey)
  }

  return (
    <Card>
      <TabComponent
        {...{
          activeKey: active,
          reversed,
          appearance,
          styles,
          tabs: tabcards,
          handleSelect,
        }}
      />
      <FlexBox culumn={!vertical}>
        <ContentTabCard tabslist={tabcards} activedKey={active} />
      </FlexBox>
    </Card>
  )
}
