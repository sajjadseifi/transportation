//default
import React from 'react'
import { MapDevelopment } from '.'
import { SeachInputMapIr } from './search.mapir'
export const MapIr = ({ disabled = false, search = null }) => {
  return (
    <MapDevelopment
      disabled={disabled}
      search={search}
      searchInput={SeachInputMapIr}
      inputProps={{
        placeholder: 'مثال:مازندران قائمشهر روستای باغدشت',
      }}
    />
  )
}
