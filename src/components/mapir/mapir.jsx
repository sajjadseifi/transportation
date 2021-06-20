//default
import React from 'react'
import { MapDevelopment } from '.'
import { MapProvider } from '../../context'
export const MapIr = () => {
  return (
    <MapProvider>
      <MapDevelopment />
    </MapProvider>
  )
}
