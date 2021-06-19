//default
import React from 'react'
import { BaseCard } from '../card'
const ContentTabCard = ({ activedKey = '', tabslist = [] }) => {
  const comp = tabslist.find((tb) => tb.key === activedKey)
  return <BaseCard>{comp ? comp.content : null}</BaseCard>
}

export default ContentTabCard
