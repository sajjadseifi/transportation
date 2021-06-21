//default
import React from 'react'
import { exeption } from '../../../core/utils/utils'
export const TextNull = ({ emptyTitle, text, children }) => {
  exeption({ emptyTitle, text, children })(String)

  return <span>{text || children || emptyTitle}</span>
}
