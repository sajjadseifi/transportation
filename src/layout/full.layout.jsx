import React, { useRef } from 'react'
import { Sidebar } from './menu'
import './layout.css'
import { HeaderLayout } from './header'
import { useSecurity } from '../core/security'
import { roleType } from '../constants'
import { ConentLayout } from './content/content.layout'
import { useWindowSize } from '../core/hook'
import { useSelector } from 'react-redux'
const FullLayout = ({ children }) => {
  const { state } = useSecurity()
  const activeSidebar = useSelector((state) => state.menu.activeSidebar)
  const sidebarRef = useRef()
  const [width, height] = useWindowSize()

  const appearance =
    state.user.role === roleType.CUSTOMER ? 'inverse' : 'default'

  const contentWith = !activeSidebar ? width : width - 340
  return (
    <>
      <HeaderLayout />
      <div className="d-flex h-100">
        <Sidebar ref={sidebarRef} appearance={appearance} />
        <ConentLayout width={contentWith}>{children}</ConentLayout>
      </div>
    </>
  )
}

export default FullLayout
