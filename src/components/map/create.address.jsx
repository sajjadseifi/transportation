//default
import React, { Fragment } from 'react'
import { FormMap } from './form/form.map'

export const CreateAddress = ({
  loading,
  onSubmit = () => {},
  onSelect = () => {},
  markList = [],
  active,
}) => {
  return (
    <FormMap
      title="میتوانید برای خودتان ادرسی ایجاد کنید و در موقع انتخاب مسیر سفر از ان استفاده کنید."
      loading={loading}
      onSubmit={onSubmit}
      activedMark={active}
      onSelect={onSelect}
      markList={markList}
    />
  )
}
