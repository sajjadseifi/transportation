import React from 'react'
export const ConentLayout = ({ children }) => {
  return (
    <div className="pb-5 mb-5 flex-1 w-100  overflow-y-auto">
      <div className="pb-5">{children}</div>
    </div>
  )
}
