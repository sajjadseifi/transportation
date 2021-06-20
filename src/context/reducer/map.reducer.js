import { updateObject } from "../../core/utils/utils"
import * as mapTypes from "../actionstype/map.types"
export const initialState = {}

export const SecurityReducer = (state = initialState, action) => {
   switch (action.type) {
      case mapTypes.INITIAL_STATE:
         return state
      case mapTypes.UPDATE_STATE:
         return updateObject(state, state)
      case mapTypes.CLEAR_STATE:
         return initialState
      default:
         throw new Error(`Unhandled action type: ${action.type}`)
   }
}