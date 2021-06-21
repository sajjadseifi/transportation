import React from 'react'
import classes from './form.map.module.css'

export const MarkItemForm = ({
  key = null,
  displayName = '',
  destination = null,
  actived = false,
  onSelect = (_key) => {},
}) => {
  return (
    <div onClick={() => onSelect(key)} className={classes.MarkItem}>
      <span className={classes.MarkItemDisplayName}>{displayName}</span>
    </div>
  )
}
