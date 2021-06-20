import * as React from "react";
import { MapStateContext } from "../provider/map.provier";
export const useMap = () => {
  const context = React.useContext(MapStateContext)
  if (context === undefined)
    throw new Error('useMap must be used within a MapProvider')

  return context
}

export const useMapSelector = (cb = (state) => state) => {
  const context = React.useContext(MapStateContext)
  if (context === undefined)
    throw new Error('useMap must be used within a MapProvider')

  return cb(context.state)
}
