//default
import React from 'react'
import { MapOverview, MapMarking } from '.'
import { MapProvider, useMap } from '../../context'
import * as actionTypes from '../../context/actions/type.action'
export const MapDevelopment = () => {
  const { state, dispatch } = useMap()
  // console.log(state)

  const mapMarkHandler = (map, e) => {
    console.log({ e })
    const { lng, lat } = e.lngLat
    dispatch({ type: actionTypes.MAP_MARK_ADD, lng, lat })
  }
  return (
    <MapProvider>
      <MapOverview lnglat={state.lnglat} onClick={mapMarkHandler}>
        <MapMarking marks={state.marks} />
      </MapOverview>
    </MapProvider>
  )
}
