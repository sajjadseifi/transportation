//default
import React from 'react'
import { BaseCard } from '../card'
export const ContentTabCard = ({ activedKey = '', tabslist = [] }) => {
  let CMP = null
  const comp = tabslist.find((tb) => `${tb.key}` === `${activedKey}`)

  if (comp) CMP = comp.component

  return <BaseCard>{CMP ? <CMP /> : CMP}</BaseCard>
}
