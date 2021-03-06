import { updateObject } from "../../core/utils/utils"
import * as actionsType from "../actions/type.action"

export const initialState = {
   marks: {},
   center: null,
   search: "",
}
const setMark = (state, action) => {
   const key = action.key
   const lnglat = action.lnglat
   const updatedMark = {
      ...state.marks,
      [key]: lnglat
   }
   return updateObject(state, { center: lnglat, marks: updatedMark })
}
const deleteMarkByKey = (state, action) => {
   const updatedMark = {}
   for (let key in state.marks)
      if (key !== action.key)
         updatedMark[key] = state.marks[key]

   return updateObject(state, { marks: updatedMark })
}

const changeCenterMapByKey = (state, action) => {
   const mkey = Object.keys(state.marks).find(mk => `${mk}` === `${action.key}`)

   if (!mkey) return state

   return updateObject(state, { center: state.marks[mkey] })
}
export const MapReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionsType.MAP_INITIAL: return updateObject(state, action)
      case actionsType.MAP_MARK_ADD: return setMark(state, action)
      case actionsType.MAP_MARK_DELETE: return deleteMarkByKey(state, action)
      case actionsType.MAP_SEARCH_TEXT: return updateObject(state, { search: action.search })
      case actionsType.MAP_SEARCH_CELAR: return updateObject(state, { search: "" })
      case actionsType.MAP_CENTER:
         return updateObject(state, { center: action.lnglat })
      case actionsType.MAP_CENTER_BYKEY: return changeCenterMapByKey(state, action)
      case actionsType.MAP_CENTER_CLEAR: return updateObject(state, { center: null })
      case actionsType.MAP_CLEAR: return initialState
      default: return state;
   }
}
