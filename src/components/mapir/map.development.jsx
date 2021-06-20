//default
import React from 'react'
import { MapOverview, MapMarking } from '.'
import { MapProvider, useMap } from '../../context'
import * as actionTypes from '../../context/actions/type.action'
export const MapDevelopment = () => {
  const { state, dispatch } = useMap()
  // console.log(state)
  const mapMarkHandler = (data) => {
    const { lng, lat } = data.transform._center
    dispatch({ type: actionTypes.MAP_MARK_ADD, lng, lat })
  }
  return (
    <MapProvider>
      <MapOverview
        pointer={
          state.marks.length > 0 ? state.marks[state.marks.length - 1] : null
        }
        onClick={mapMarkHandler}
      >
        <MapMarking marks={state.marks} />
      </MapOverview>
    </MapProvider>
  )
}
