import React from 'react'
export const ConentLayout = ({ children }) => {
  return (
    <div className="mb-5 flex-1 w-100 h-100  overflow-y-auto">
      <div className="">{children}</div>
    </div>
  )
}
