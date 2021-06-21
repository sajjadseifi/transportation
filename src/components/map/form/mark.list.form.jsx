import React from 'react'
import { MarkItemForm } from './mark.item.form'
import classes from './form.map.module.css'
export const MarkListForm = ({ marks = [], active, onSelect }) => (
  <ul className={classes.MarkListForm}>
    {marks.map((mk, index) => (
      <li className={classes.MarkListItemForm}>
        <MarkItemForm
          actived={active === mk.key}
          onSelect={onSelect}
          {...mk}
          key={index}
        />
      </li>
    ))}
  </ul>
)
