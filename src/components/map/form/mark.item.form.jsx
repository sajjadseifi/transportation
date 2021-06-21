import React from 'react'
import { Icon } from 'rsuite'
import { classNames } from '../../../core/utils/utils'
import classes from './form.map.module.css'
import { FlexBox } from '../../box'
import { TextNull } from '../../UI/text'
import { NinjaConditionWrappr as NinWrap } from '../../wrapper'

export const MarkItemForm = ({
  key = null,
  emptyTitle = 'مکانی انتخاب نشد',
  removeTtile = 'پاک کردن',
  displayName = '',
  destination = null,
  actived = false,
  color = '',
  onSelect = (_key) => {},
  onClear = (_key) => {
    /*if key undefind all remove*/
  },
}) => {
  const activedClasses = actived ? classes.Active : classes.DeActive
  const titleClass = classNames(classes.Title, activedClasses)

  return (
    <div onClick={() => onSelect(key)} className={classNames(classes.MarkItem)}>
      <h6 style={{ color }} className={titleClass}>
        <FlexBox alignItems="end">
          <Icon size="2x" icon="map-marker" />
          <span className="mx-1"></span>
          <span className={classes.MarkItemDisplayName}>{displayName}</span>
        </FlexBox>
      </h6>
      <div className={classes.CotnentMarkItem}>
        <span className={actived ? classes.Active : classes.DeActive}>
          <Icon className="mx-2" icon="map-pin" />
          <TextNull className={classes.DetinationText} emptyTitle={emptyTitle}>
            {destination}
          </TextNull>
        </span>
        <NinWrap condition={destination}>
          <span className={classes.ClearButton}>{removeTtile}</span>
        </NinWrap>
      </div>
    </div>
  )
}
