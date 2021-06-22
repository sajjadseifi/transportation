//default
import React, { Fragment } from 'react'
import { Mapir } from '.'
import { removeMark } from '../../context/actions/map.action'
import { useMapDispatch, useMapSelector } from '../../context/hook/map.hook'

export const MapMarking = () => {
  const dispatch = useMapDispatch()
  const { marks } = useMapSelector()
  return (
    <Fragment>
      {Object.keys(marks).map((key, index) => {
        const mark = marks[key]
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
