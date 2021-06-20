//default
import React, { Fragment, useState } from 'react'
import Mapir from 'mapir-react-component'

export const MapMarking = ({
  mareers = {},
  key,
  multy = true,
  onClick,
  markerClicked,
}) => {
  const [markes, setMars] = useState([{ lat: 50, lng: 40 }])
  const mapMarkHandler = (data) => {
    console.log({ data })
    const { lng, lat } = data.transform._center
    setMars((prev) => [...prev, { lat, lng }])
  }
  console.log(markes)
  return (
    <Fragment>
      {markes.map((mrk, index) => (
        <Mapir.Marker
          key={index}
          coordinates={[mrk.lng, mrk.lat]}
          onClick={mapMarkHandler}
          anchor="bottom"
        ></Mapir.Marker>
      ))}
    </Fragment>
  )
}
