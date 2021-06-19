//default
import React from 'react'
import queryString from 'query-string'
import { Route } from 'react-router-dom'
export const QueryRoute = ({
  queryList = [] || '',
  component: Component,
  ...rest
}) => {
  let params = {}

  const qs = queryString.parse(rest.location.search)

  const qls = typeof queryList === 'string' ? queryList.split(',') : queryList
  qls.forEach((q) => (params[q] = qs[q]))

  rest.location.state = { ...params }

  return <Route {...{ rest }} component={Component} />
}
