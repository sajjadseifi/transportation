//default
import React from 'react'
export const BaseCard = ({ style, className, children, ...props }) => {
  return <div {...{ style, className, ...props }}>{children}</div>
}
