//default
import React from 'react'
import queryString from 'query-string'
import { Route, useHistory } from 'react-router-dom'
export const QueryRoute = ({
  queryList = [] || '',
  overideNullVAue = {},
  component: Component,
  ...rest
}) => {
  let params = {}
  let reChange = false
  const history = useHistory()
  const qs = queryString.parse(rest.location.search)
  const qls = typeof queryList === 'string' ? queryList.split(',') : queryList
  qls.forEach((q) => {
    params[q] = qs[q] ? qs[q] : overideNullVAue[q]
    if (!qs[q] && overideNullVAue[q]) reChange = true
  })

  if (reChange) {
    const search = queryString.stringify(params, {})
    history.push(`${history.location.pathname}?${search}`)
    return null
  }

  rest.location.state = { ...params }
  return <Route {...{ rest }} component={Component} />
}
