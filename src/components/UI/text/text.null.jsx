//default
import React from 'react'
import { exeption } from '../../../core/utils/utils'
export const TextNull = ({ emptyTitle, text, children, ...props }) => {
  exeption({ emptyTitle, text, children })('string')

  return <span {...props}>{text || children || emptyTitle}</span>
}
