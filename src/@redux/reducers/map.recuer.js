import { mapActionTypes } from "../@types";
import { updateObject } from "../../core/utils";
import pic from "object.pick";

export const initialState = {
   marks: {},
   center: null,
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
export const mapReducer = (state = initialState, action) => {
   switch (action.type) {
      case mapActionTypes.MAP_INITIAL: return updateObject(state, action)
      case mapActionTypes.MAP_MARK_ADD: return setMark(state, action)
      case mapActionTypes.MAP_MARK_DELETE: return deleteMarkByKey(state, action)
      case mapActionTypes.MAP_CLEAR: return initialState
      default: return state;
   }
}