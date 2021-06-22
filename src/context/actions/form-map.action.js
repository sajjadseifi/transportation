// case actionsType.FORMMAP_ACTIVE_SET: return updateObject(state, { active: actions.active })
// case actionsType.FORMMAP_ACTIVE_WITH_KEY: return activeMarkWithKey(state, actions)
// case actionsType.FORMMAP_ACTIVE_DEL: return updateObject(state, { active: null })
// case actionsType.FORMMAP_MARKLIST_SET: return updateObject(state, { markerList: [] })
// case actionsType.FORMMAP_MARKLIST_DEL: return updateObject(state, { markerList: [] })
import * as actionsType from "./type.action";
import { reducerAction } from "./type.action";

export const activeMark = (mark, activeIndex = -1) => reducerAction(actionsType.FORMMAP_ACTIVE_SET, { mark, activeIndex })
export const activeByKey = (key) => reducerAction(actionsType.FORMMAP_ACTIVE_WITH_KEY, { key })
export const deActive = () => reducerAction(actionsType.FORMMAP_ACTIVE_DEL)
export const loadMarkList = (markerList) => reducerAction(actionsType.FORMMAP_MARKLIST_SET, { markerList })
export const clearMarkList = () => reducerAction(actionsType.FORMMAP_MARKLIST_DEL)
