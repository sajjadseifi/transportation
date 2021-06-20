import * as actionsType from "./type.action"

export const initialMap = (map) => ({ type: actionsType.MAP_INITIAL, map })

export const addMark = (key, lnglat) => ({ type: actionsType.MAP_MARK_ADD, key, lnglat })

export const removeMark = (key) => ({ type: actionsType.MAP_MARK_ADD, key })

export const clearMap = () => ({ type: actionsType.MAP_CLEAR })
