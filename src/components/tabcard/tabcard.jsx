//default
import React, { useEffect, useState } from 'react'
import { FlexBox } from '../box'
import { Card } from '../card'
import { TabComponent } from '../tab/tab.component'
import ContentTabCard from './content.tabcard'
const styles = {
  marginBottom: 50,
}
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
    if (activeKey !== active) setActive(activeKey)
    return setActive(null)
  }, [activeKey])

  const handleSelect = (newKey) => {
    setActive(newKey)
    if (newKey !== active) onChangeTab(newKey)
  }

  return (
    <Card>
      <FlexBox culumn={!vertical}>
        <TabComponent
          {...{
            activeKey,
            reversed,
            appearance,
            styles,
            tabs: tabcards,
            handleSelect,
          }}
        />
        <ContentTabCard tabslist={tabcards} activedKey={activeKey} />
      </FlexBox>
    </Card>
  )
}
