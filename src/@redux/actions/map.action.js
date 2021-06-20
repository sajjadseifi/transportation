import { mapActionTypes } from "../@types"

export const initialMap = (map) => dispatch =>
   dispatch({ type: mapActionTypes.MAP_INITIAL, map })

export const addMark = (key, lnglat) => dispatch =>
   dispatch({ type: mapActionTypes.MAP_MARK_ADD, key, lnglat })

export const removeMark = (key) => dispatch =>
   dispatch({ type: mapActionTypes.MAP_MARK_ADD, key })

export const clearMap = () => dispatch =>
   dispatch({ type: mapActionTypes.MAP_CLEAR })
