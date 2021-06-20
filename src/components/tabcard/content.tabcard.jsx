//default
import React from 'react'
import { BaseCard } from '../card'
export const ContentTabCard = ({
  activedKey = '',
  backTablist = [],
  tabslist = [],
}) => {
  let CMP = null
  const isActivedTab = (tablist) =>
    tablist.find((tb) => `${tb.key}` === `${activedKey}`)

  let activedTab = isActivedTab(tabslist) || isActivedTab(backTablist)
  if (activedTab) CMP = activedTab.component

  return <BaseCard>{CMP ? <CMP /> : CMP}</BaseCard>
}
