//default
import React from 'react'
import { persent } from '../../../core/utils/utils'
import { NinjaConditionWrappr as NinWrap } from '../../wrapper'
import classes from './linear.cream.module.css'
const defTranition = 0.1
export const LinearCream = ({
  currentStep = 1,
  sizeStep = 1,
  vertical = false,
  customCream = null,
  speed = 2,
  basebg = '#fff',
  creambg = '#0084ff',
}) => {
  const transition = speed * defTranition
  let creamSize = 0
  let posPlace = 0

  if (currentStep >= 0 && currentStep < sizeStep) {
    creamSize = persent(100 / sizeStep)
    posPlace = persent(((currentStep % sizeStep) * 100) / sizeStep)
  }

  const pos = vertical ? 'top' : 'left'
  const size = vertical ? 'height' : 'width'

  const creamStyle = {
    [pos]: posPlace,
    [size]: creamSize,
    transition,
  }

  return (
    <div style={{ background: basebg }} className={classes.LinearCream}>
      <div style={creamStyle} className={classes.Cream}>
        <NinWrap condition={!!customCream}>
          {customCream}
          <div style={{ background: creambg }} className={classes.Body}></div>
        </NinWrap>
      </div>
    </div>
  )
}
