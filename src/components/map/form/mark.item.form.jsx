import React from 'react'
import { Icon } from 'rsuite'
import { classNames } from '../../../core/utils/utils'
import classes from './form.map.module.css'
import { FlexBox } from '../../box'
import { TextNull } from '../../UI/text'
import { NinjaConditionWrappr as NinWrap } from '../../wrapper'
import { useFormMapDispatch } from '../../../context/hook/form-map.hook'

export const MarkItemForm = ({
  mkey = null,
  emptyTitle = 'مکانی انتخاب نشد',
  removeTtile = 'پاک کردن',
  displayName = '',
  desination = null,
  actived = false,
  color = '',
  onSelect = () => {},
  onDelete = () => {},
}) => {
  const activedClasses = actived ? classes.Active : classes.DeActive
  const titleClass = classNames(classes.Title, activedClasses)

  return (
    <FlexBox alignCenter>
      <div onClick={onSelect} className={classNames(classes.MarkItem)}>
        <h6 style={{ color }} className={titleClass}>
          <FlexBox alignItems="end">
            <Icon size="2x" icon="map-marker" />
            <span className="mx-1"></span>
            <span className={classes.MarkItemDisplayName}>{displayName}</span>
          </FlexBox>
        </h6>
        <div
          className={classNames(
            classes.CotnentMarkItem,
            actived ? classes.Active : classes.DeActive,
          )}
        >
          <Icon className="mx-2" icon="map-pin" />
          <TextNull className={classes.DetinationText} emptyTitle={emptyTitle}>
            {desination}
          </TextNull>
        </div>
      </div>
      <NinWrap condition={!!desination}>
        <span onClick={onDelete} className={classes.ClearButton}>
          {removeTtile}
        </span>
      </NinWrap>
    </FlexBox>
  )
}
