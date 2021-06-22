import React, { useEffect, useState } from 'react'
import { FormMapProvider } from '../../context/provider/form-map.privider'
import { MapLayout } from '../../layout/content/map.layout'
import { MapCard } from '../card/map.card'

export const MapIrWithFormMap = ({
  initialActiveKey,
  markerList = [],
  loading = false,
  onSubmit = () => {},
  onSelect = () => {},
  children,
}) => {
  const [selectMark, setSelectMark] = useState(null)
  const onSelectMark = (mark) => {
    setSelectMark(mark)
    onSelect(mark)
  }

  useEffect(() => {
    if (!initialActiveKey) return

    const activeIndex = markerList.findIndex(
      (mk) => `${mk.key}` === `${initialActiveKey}`,
    )
    setSelectMark(markerList[activeIndex])
  }, [initialActiveKey])

  return (
    <MapLayout keyMark={selectMark ? selectMark.key : null}>
      <MapCard>
        <FormMapProvider
          loading={loading}
          onSubmit={onSubmit}
          activeMark={selectMark}
          markerList={markerList}
          onSelect={onSelectMark}
        >
          {children}
        </FormMapProvider>
      </MapCard>
    </MapLayout>
  )
}
