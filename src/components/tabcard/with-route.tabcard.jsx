//default
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { TabCard } from '.'
import queryString from 'query-string'
export const TabCardWithRoute = ({
  baseRoute = null,
  defaultActived = '',
  ...props
}) => {
  const { state } = useLocation()
  const tab = state.tab ? state.tab : defaultActived
  const history = useHistory()
  console.log(history.location)
  const changeToRouteWithTab = (tabKey) => {
    if (baseRoute) return gotoTab(baseRoute, tabKey)

    const qs = queryString.parse(history.location.search)
    qs.tab = tabKey
    const search = queryString.stringify(qs, {})
    history.push(`${history.location.pathname}?${search}`)
  }
  const gotoTab = (baseRoute, tabKey) =>
    history.push(`${baseRoute}?tab=${tabKey}`)
  return (
    <TabCard
      handeled
      appearance="subtle"
      onChangeTab={changeToRouteWithTab}
      activeKey={tab}
      {...props}
    />
  )
}
