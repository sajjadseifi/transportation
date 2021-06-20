import * as React from "react";
import { MapStateContext } from "../provider/map.provier";
export const useMap = () => {
  const context = React.useContext(MapStateContext)
  if (context === undefined)
    throw new Error('useMap must be used within a MapProvider')

  return context
}