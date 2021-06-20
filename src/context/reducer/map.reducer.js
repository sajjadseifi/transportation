import { updateObject } from "../../core/utils/utils"
import * as actionsType from "../actions/type.action"
import pic from "object.pick"

export const initialState = {
   marks: [],
}

export const SecurityReducer = (state = initialState, action) => {
   console.log({ action })
   switch (action.type) {
      case actionsType.MAP_INITIAL:
         return updateObject(initialState, action.payload)
      case actionsType.MAP_MARK_ADD:
         const mark = pic(action, ["lat", "lng"])
         return { ...state, lat: mark.lat, lng: mark.lng, marks: [...state.marks, mark] }
      case actionsType.MAP_MARK_DELETE:
         let filteredMarks = state.marks.filter((_, index) => index === action.index)
         return updateObject(state, { marks: filteredMarks })
      case actionsType.MAP_CLEAR: return initialState
      default:
         return state;
   }
}