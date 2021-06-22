//default
import React from 'react'
import { Mapir } from '.'
import { useMapSelector } from '../../context/hook/map.hook'
import { classNames } from '../../core/utils/utils'
import { NinjaConditionWrappr as NinWrap } from '../wrapper'
import { apiKey, Map } from './map'
import classes from './map.module.css'

export const MapOverview = ({ seachCompoent, onClick, children }) => {
  const center = useMapSelector((state) => state.center)

  let mapProps = {
    Map: Map,
    apiKey: apiKey,
    onClick: onClick,
    center: center,
  }

  return (
    <div className={classes.MapOverview}>
      <Mapir {...mapProps}>{children}</Mapir>
      <NinWrap condition={!!seachCompoent}>
        <div className={classNames(classes.SeachBox, classes.Center)}>
          {seachCompoent}
        </div>
      </NinWrap>
    </div>
  )
}
