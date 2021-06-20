import { updateObject } from "../../core/utils/utils"
import * as actionsType from "../actions/type.action"
import pic from "object.pick"

export const initialState = {
   marks: [],
   lnglat: null
}

export const SecurityReducer = (state = initialState, action) => {
   console.log("SecurityReducer", { action })
   switch (action.type) {
      case actionsType.MAP_INITIAL:
         return updateObject(initialState, action.payload)
      case actionsType.MAP_MARK_ADD:
         const lnglat = pic(action, ["lat", "lng"])
         return { ...state, lnglat, marks: [...state.marks, lnglat] }
      case actionsType.MAP_MARK_DELETE:
         console.log("SecurityReducer", "DELETE")
         let filteredMarks = state.marks.filter((_, index) => {
            console.log(index, "===", action.index, index === action.index)
            return index === action.index
         })
         console.log("ss", filteredMarks)
         let center = filteredMarks.length === 0 ? null : state.lnglat
         return updateObject(state, { lnglat: center, marks: filteredMarks })
      case actionsType.MAP_CLEAR: return initialState
      default:
         return state;
   }
}