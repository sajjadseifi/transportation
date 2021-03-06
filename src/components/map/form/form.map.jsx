//default
import React, { Fragment, useEffect } from 'react'
import { Button, Icon } from 'rsuite'
import { FlexBox } from '../../box'
import { LinearCream } from '../../UI/cream'
import { MarkListForm } from './mark.list.form'
import classes from './form.map.module.css'
import { useFormMapSeletor } from '../../../context/hook/form-map.hook'
import { useMapDispatch, useMapSelector } from '../../../context/hook/map.hook'
import { setCetnerByKey } from '../../../context/actions/map.action'
import { NinjaConditionWrappr as NinWrap } from '../../wrapper'

export const FormMap = ({
  useMap = false,
  title,
  btnTitle = 'ثبت',
  btnColor = '',
  btnAppearance = 'subtle',
  canload = true,
}) => {
  const dispatchMap = useMapDispatch()
  const marks = useMapSelector((state) => state.marks)
  const {
    onSubmit,
    markerList,
    activeMark,
    activeIndex,
    loading,
  } = useFormMapSeletor((state) => state)

  useEffect(() => {
    if (useMap && activeMark && marks[activeMark.key])
      dispatchMap(setCetnerByKey(activeMark.key))
  }, [activeMark, dispatchMap, marks, useMap])

  const onClearingDesination = () => {
    console.log('onClearingDesination')
  }

  const existingDestination = markerList.some((mark) => mark.desination)

  return (
    <Fragment>
      <h6>
        <FlexBox alignItems="start">
          <Icon size="2x" color="red" icon="map" />
          <span className="px-2"></span>
          {title}
        </FlexBox>
      </h6>
      <FlexBox className="my-3" alignItems="stretch">
        <div className={classes.SideCream}>
          <LinearCream
            vertical
            creambg={activeMark ? activeMark.color : null}
            sizeStep={markerList.length}
            currentStep={activeIndex === -1 ? 0 : activeIndex}
          />
        </div>
        <span className="mx-1"></span>
        <div className="flex-1">
          <MarkListForm useMap={useMap} />
        </div>
      </FlexBox>
      <FlexBox className="m-3" justifyContent="end">
        <NinWrap condition={existingDestination}>
          <Button onClick={onClearingDesination} color="red" appearance="ghost">
            {'خالی کردن'}
          </Button>
        </NinWrap>
        <span className="mx-2"></span>
        <Button
          loading={canload && loading}
          onClick={onSubmit}
          color={btnColor}
          appearance={btnAppearance}
          active
        >
          {btnTitle}
        </Button>
      </FlexBox>
    </Fragment>
  )
}
