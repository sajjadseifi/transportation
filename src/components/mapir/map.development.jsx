//default
import React from 'react'
import { MapOverview, MapMarking } from '.'
import { addMark } from '../../context/actions/map.action'
import { useMap } from '../../context'
export const MapDevelopment = ({
  selectedkey = 'map_key',
  changed = () => {},
}) => {
  const { state, dispatch } = useMap()
  const mapMarkHandler = (_map, e) => {
    dispatch(addMark(selectedkey, e.lngLat))
    changed(selectedkey, e.lngLat)
  }
  return (
    <MapOverview onClick={mapMarkHandler}>
      <MapMarking marks={state.marks} />
    </MapOverview>
  )
}
