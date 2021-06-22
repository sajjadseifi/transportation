import React from 'react'
import { MarkItemForm } from './mark.item.form'
import classes from './form.map.module.css'
import {
  useFormMapDispatch,
  useFormMapSeletor,
} from '../../../context/hook/form-map.hook'
import * as formMapActions from '../../../context/actions/form-map.action'
import { setCenter } from '../../../context/actions/map.action'
import { useMapDispatch, useMapSelector } from '../../../context/hook/map.hook'

export const MarkListForm = ({ useMap }) => {
  const dispatch = useFormMapDispatch()
  const dispatchMap = useMapDispatch()
  const { markerList, onDelete, onSelect, activeMark } = useFormMapSeletor()
  const marks = useMapSelector((state) => state.marks)
  const onSelectMark = (marker, index) => {
    dispatch(formMapActions.activeMark(marker, index))
    if (onSelect) onSelect(marker, index)
    if (useMap && marks[marker.key]) dispatchMap(setCenter(marks[marker.key]))
  }
  const onDeleteMark = (marker, index) => {
    dispatch(formMapActions.deleteMarker(marker.key))
    if (onDelete) onDelete(marker, index)
  }
  return (
    <ul className={classes.MarkListForm}>
      {markerList.map((mk, index) => (
        <li className={classes.MarkListItemForm}>
          <MarkItemForm
            key={index}
            {...mk}
            mkey={mk.key}
            actived={activeMark && `${activeMark.key}` === `${mk.key}`}
            onSelect={() => onSelectMark(mk, index)}
            onDelete={() => onDeleteMark(mk, index)}
          />
        </li>
      ))}
    </ul>
  )
}
