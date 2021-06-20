//default
import React, { Fragment } from 'react'
import { Mapir } from '.'
import { removeMark } from '../../context/actions/map.action'
import { useMap } from '../../context'

export const MapMarking = () => {
  const { state, dispatch } = useMap()
  console.log('state.marks : ', state.marks)
  return (
    <Fragment>
      {Object.keys(state.marks).map((key, index) => {
        const mark = state.marks[key]
        const coordinates = [mark.lng, mark.lat]
        return (
          <Mapir.Marker
            key={index + key}
            coordinates={coordinates}
            onClick={() => dispatch(removeMark(key))}
            anchor="bottom"
          ></Mapir.Marker>
        )
      })}
    </Fragment>
  )
}
