import * as React from 'react'
import { initialState, SecurityReducer } from '../reducer/map.reducer'
export const MapStateContext = React.createContext()

export const MapProvider = ({ children } = initialState) => {
  const [state, dispatch] = React.useReducer(SecurityReducer, {})

  const value = { state, dispatch }

  return (
    <MapStateContext.Provider value={value}>
      {children}
    </MapStateContext.Provider>
  )
}
