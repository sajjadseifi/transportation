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
  const { markerList, onSelect, activeMark } = useFormMapSeletor()
  const marks = useMapSelector((state) => state.marks)
  const onSelectMark = (mark, index) => {
    dispatch(formMapActions.activeMark(mark, index))
    onSelect(mark, index)
    console.log(`${useMap} && ${marks[mark.key]}`, useMap && marks[mark.key])
    if (useMap && marks[mark.key]) dispatchMap(setCenter(marks[mark.key]))
  }

  return (
    <ul className={classes.MarkListForm}>
      {markerList.map((mk, index) => (
        <li className={classes.MarkListItemForm}>
          <MarkItemForm
            actived={activeMark && `${activeMark.key}` === `${mk.key}`}
            onSelect={() => onSelectMark(mk, index)}
            {...mk}
            mkey={mk.key}
            key={index}
          />
        </li>
      ))}
    </ul>
  )
}
