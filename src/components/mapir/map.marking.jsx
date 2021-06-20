//default
import React, { Fragment } from 'react'
import { Mapir } from '.'
import { useMap } from '../../context'

export const MapMarking = ({ marks = [], removeHandler }) => {
  const { state } = useMap()
  console.log({ state })
  return (
    <Fragment>
      {marks.map(({ lat, lng }, index) => (
        <Mapir.Marker
          key={index}
          coordinates={[lng, lat]}
          onClick={() => removeHandler(index)}
          anchor="bottom"
        ></Mapir.Marker>
      ))}
    </Fragment>
  )
}
