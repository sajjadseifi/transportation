import { updateObject } from "../../core/utils/utils"
import * as actionsType from "../actions/type.action"
export const formMapInitialState = {
   loading: false,
   onSubmit: () => { },
   useMap: false,
   activeMark: null,
   activeIndex: -1,
   markerList: [],
}

const activeMarkWithKey = (state, actions) => {
   const activeIndex = state.markerList.findIndex(mrk => `${mrk.key}` === `${actions.key}`)

   let activeMark = null
   if (activeIndex !== -1) activeMark = state.markerList[actions.key]

   return updateObject(state, { activeIndex, activeMark })
}

const activingMark = (state, actions) => {
   let activeIndex = typeof actions.activeIndex === "number" ? actions.activeIndex : - 1;

   if (actions.mark && activeIndex < 0)
      activeIndex = state.markerList.findIndex(mrk => `${mrk.key}` === `${actions.mark.key}`)

   const changes = { activeMark: actions.mark, activeIndex }
   return updateObject(state, changes)
}

const deleteDestinationMarkder = (state, actions) => {
   const updatedMarkerList = state.markerList.map(m => {
      if (`${m.key}` !== `${actions.key}`)
         return m;

      return updateObject(m, { desination: null })
   })

   return updateObject(state, { markerList: updatedMarkerList })
}
export const formMapRecuer = (state = formMapInitialState, actions) => {
   switch (actions.type) {
      case actionsType.FORMMAP_ACTIVE_SET:
         return activingMark(state, actions)
      case actionsType.FORMMAP_ACTIVE_WITH_KEY:
         return activeMarkWithKey(state, actions)
      case actionsType.FORMMAP_ACTIVE_DEL:
         return updateObject(state, { activeMark: null })
      case actionsType.FORMMAP_MARKLIST_SET:
         return updateObject(state, { markerList: actions.markerList })
      case actionsType.FORMMAP_MARKLIST_DEL:
         return updateObject(state, { markerList: [] })
      case actionsType.FORMMAP_DELETE_MARKER: return deleteDestinationMarkder(state, actions)
      default: return state
   }
}