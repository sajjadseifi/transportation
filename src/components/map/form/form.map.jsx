//default
import React, { Fragment } from 'react'
import { Icon } from 'rsuite'
import { FlexBox } from '../../box'
import { MarkListForm } from './mark.list.form'

export const FormMap = ({
  title,
  loading,
  markList = [],
  activedMark,
  onSubmit = () => {},
  onSelect = (_key) => {},
  reset = () => {},
}) => {
  return (
    <Fragment>
      <h6>
        <FlexBox alignItems="start">
          <Icon size="2x" color="red" icon="map" />
          <span className="px-2"></span>
          {title}
        </FlexBox>
      </h6>
      <FlexBox className="my-3">
        <div></div>
        <div style={{ flex: 1 }}>
          <MarkListForm
            onSelect={onSelect}
            active={activedMark}
            marks={markList}
          />
        </div>
      </FlexBox>
      <div>{loading ? 'loading...' : ''}</div>
      <div onClick={onSubmit}>ثبت ادرس</div>
    </Fragment>
  )
}
