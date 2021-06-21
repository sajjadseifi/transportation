//default
import React, { Fragment } from 'react'
import { Icon } from 'rsuite'
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
        <Icon size="2x" color="red" icon="map" />
        <span className="px-1"></span>
        {title}
      </h6>
      <div className="my-3">
        <MarkListForm
          onSelect={onSelect}
          active={activedMark}
          marks={markList}
        />
      </div>
      <div>{loading ? 'loading...' : ''}</div>
      <div onClick={onSubmit}>ثبت ادرس</div>
    </Fragment>
  )
}
