import React, { useReducer } from 'react'
import { formMapInitialState, formMapRecuer } from '../reducer/form-map.reducer'
export const FormMapStateContext = React.createContext()

export const FormMapProvider = ({
  children,
  updateProps = false,
  ...initialValues
}) => {
  const [state, dispatch] = useReducer(formMapRecuer, formMapInitialState)

  const prodState = Object.assign(state, initialValues)
  const value = { state: prodState, dispatch }

  return (
    <FormMapStateContext.Provider value={value}>
      {children}
    </FormMapStateContext.Provider>
  )
}
