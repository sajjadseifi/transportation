//default
import React from 'react'
import { Nav } from 'rsuite'
const styles = {
  marginBottom: 50,
}
export const TabComponent = ({
  activeKey,
  reversed = false,
  appearance = 'subtle',
  vertical = false,
  tabs = [],
  handleSelect = () => {},
  ...props
}) => {
  return (
    <Nav
      {...{ activeKey, vertical, styles, ...props }}
      onSelect={handleSelect}
    ></Nav>
  )
}
