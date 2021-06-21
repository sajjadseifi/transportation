import * as React from "react";
import { MapStateContext, MapProvider } from "../provider/map.provier";
import { useDispatch, useSelector } from "./context.hook";

export const useMap = () => {
  const context = React.useContext(MapStateContext)
  if (context === undefined)
    throw new Error('useMap must be used within a MapProvider')

  return context
}
export const useMapDispatch = () =>
  useDispatch(MapStateContext, "useMapDispatch", MapProvider.name)
export const useMapSelector = (cb = (state) => state) =>
  useSelector(MapStateContext, "useMapSelector", MapProvider.name, cb)
