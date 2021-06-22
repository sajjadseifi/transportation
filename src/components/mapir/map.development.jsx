//default
import React, { useState } from 'react'
import { MapOverview, MapMarking } from '.'
import { addMark, setSeach } from '../../context/actions/map.action'
import { useMap } from '../../context'
import { sleep } from '../../core/utils/utils'
export const MapDevelopment = ({
  selectedkey = null,
  changed = () => {},
  searchInput, //= ({ onCahnge, onSubmit, value }) => {},
  inputProps,
}) => {
  let SearchInputCmp = null
  const { state, dispatch } = useMap()
  const [loading, setLoading] = useState()

  const mapMarkHandler = (_map, e) => {
    if (selectedkey) {
      dispatch(addMark(selectedkey, e.lngLat))
      changed(selectedkey, e.lngLat)
    }
  }
  const onCahngeSearch = (value) => dispatch(setSeach(value))
  const onSearch = async (search) => {
    setLoading(true)
    await sleep(2)
    setLoading(false)
  }

  if (searchInput) {
    const SC = searchInput
    SearchInputCmp = (
      <SC
        inputProps={inputProps}
        value={state.seach}
        onCahnge={onCahngeSearch}
        onSearch={onSearch}
        loading={loading}
      />
    )
  }
  return (
    <MapOverview seachCompoent={SearchInputCmp} onClick={mapMarkHandler}>
      <MapMarking marks={state.marks} />
    </MapOverview>
  )
}
