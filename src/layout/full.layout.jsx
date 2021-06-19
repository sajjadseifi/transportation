import React from 'react'
import { Sidebar } from './menu'
import './layout.css'
import { HeaderLayout } from './header'
import { useSecurity } from '../core/security'
import { roleType } from '../constants'
import { ConentLayout } from './content/content.layout'
const FullLayout = ({ children }) => {
  const { state } = useSecurity()
  const appearance =
    state.user.role === roleType.CUSTOMER ? 'inverse' : 'default'

  return (
    <>
      <HeaderLayout />
      <div className="d-flex h-100">
        <Sidebar appearance={appearance} />
        <ConentLayout>{children}</ConentLayout>
      </div>
    </>
  )
}

export default FullLayout
