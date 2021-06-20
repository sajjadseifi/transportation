//default
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Mapir } from '.'
import { mapActions } from '../../@redux/actions'

export const MapMarking = () => {
  const { marks } = useSelector((state) => state.map)
  const dispatch = useDispatch()
  const removeHandler = (index) => {
    dispatch(mapActions.removeMark(index))
  }
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
