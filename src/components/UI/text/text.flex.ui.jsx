//default
import React from 'react'
import { FlexBox } from '../../box'

export const TextFlex = ({ text, children }) => {
  return <FlexBox justCenter>{text || children}</FlexBox>
}
