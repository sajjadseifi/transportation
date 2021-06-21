//default
import React from 'react'
import { MapIr } from '../../components/mapir'
export const MapLayout = ({ disabled, children }) => {
  return (
    <div className="map-layout">
      <MapIr disabled={disabled} />
      {children && <div className="map-layout-overlab">{children}</div>}
    </div>
  )
}
