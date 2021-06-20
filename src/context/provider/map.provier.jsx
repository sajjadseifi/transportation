import * as React from 'react'
import { initialState, MapReducer } from '../reducer/map.reducer'
export const MapStateContext = React.createContext()

export const MapProvider = ({ children, ...initialValues } = initialState) => {
  const [state, dispatch] = React.useReducer(MapReducer, {
    ...initialState,
    ...initialValues,
  })

  const value = { state, dispatch }
  return (
    <MapStateContext.Provider value={value}>
      {children}
    </MapStateContext.Provider>
  )
}
