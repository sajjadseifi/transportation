import React, { useEffect, useReducer } from 'react'
import { formMapInitialState, formMapRecuer } from '../reducer/form-map.reducer'
import { loadMarkList } from '../actions/form-map.action'
export const FormMapStateContext = React.createContext()

export const FormMapProvider = ({
  children,
  markerList = [],
  updateWithProps = false,
  ...initialValues
}) => {
  const [state, dispatch] = useReducer(formMapRecuer, {
    formMapInitialState,
    markerList,
  })

  useEffect(() => {
    dispatch(loadMarkList(markerList))
    return () => dispatch(loadMarkList([]))
  }, [markerList, dispatch])
  const prodState = Object.assign(state, initialValues)

  const value = { state: prodState, dispatch }
  return (
    <FormMapStateContext.Provider value={value}>
      {children}
    </FormMapStateContext.Provider>
  )
}
