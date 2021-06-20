//default
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { TabCard } from '.'
import queryString from 'query-string'
export const TabCardWithRoute = ({
  baseRoute = null,
  killAllQueryString = false,
  defaultActived = '',
  ...props
}) => {
  const { state } = useLocation()
  const tab = state.tab ? state.tab : defaultActived
  const history = useHistory()
  const changeToRouteWithTab = (tabKey) => {
    let qs = queryString.parse(history.location.search)
    qs = killAllQueryString ? { tab: tabKey } : { ...qs, tab: tabKey }
    const search = queryString.stringify(qs, {})
    const pathName = baseRoute ? baseRoute : history.location.pathname
    history.push(`${pathName}?${search}`)
  }
  return (
    <TabCard
      handeled
      onChangeTab={changeToRouteWithTab}
      activeKey={tab}
      {...props}
    />
  )
}
