import React from 'react'
export const ConentLayout = ({ width, children }) => {
  return (
    <div style={{ width }} className="content-layout">
      {children}
    </div>
  )
}
