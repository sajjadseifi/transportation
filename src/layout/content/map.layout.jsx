//default
import React from 'react'
import { MapIr } from '../../components/mapir'
import { MapProvider } from '../../context'

export const MapLayout = ({ keyMark, disabled, children }) => {
  return (
    <MapProvider>
      <div className="map-layout">
        <MapIr keyMark={keyMark} disabled={disabled} />
        {children && <div className="map-layout-overlab">{children}</div>}
      </div>
    </MapProvider>
  )
}
