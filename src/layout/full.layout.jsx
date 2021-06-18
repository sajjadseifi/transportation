import React from 'react'
import { Sidebar } from './menu'
import './layout.css'
import { HeaderLayout } from './header'
import { useSecurity } from '../core/security'
import { roleType } from '../constants'

const FullLayout = ({ children }) => {
  const { state } = useSecurity()
  console.log({ state })
  const appearance =
    state.user.role === roleType.CUSTOMER ? 'inverse' : 'default'

  return (
    <>
      <HeaderLayout />
      <div className="d-flex h-100">
        <Sidebar appearance={appearance} />
        <div className="pb-5 mb-5 flex-1 w-100 overflow-y-auto">
          <div className="pb-5">{children}</div>
        </div>
      </div>
    </>
  )
}

export default FullLayout
