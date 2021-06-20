//default
import React, { useState } from 'react'
import { MapOverview, MapMarking } from '.'

export const MapDevelopment = ({}) => {
  const clikcHandler = (d) => {
    console.log({ d })
  }
  return (
    <MapOverview onClick={clikcHandler}>
      <MapMarking />
    </MapOverview>
  )
}
