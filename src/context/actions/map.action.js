import * as actionsType from "./type.action"

export const initialMap = (map) => ({ type: actionsType.MAP_INITIAL, map })

export const addMark = (key, lnglat) => ({ type: actionsType.MAP_MARK_ADD, key, lnglat })

export const removeMark = (key) => ({ type: actionsType.MAP_MARK_ADD, key })

export const clearMap = () => ({ type: actionsType.MAP_CLEAR })

export const setSeach = () => ({ type: actionsType.MAP_SEARCH_TEXT })

export const clearSeach = () => ({ type: actionsType.MAP_SEARCH_CELAR })