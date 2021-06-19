//default
import React, { useEffect, useState } from 'react'
import { Icon, Nav } from 'rsuite'
const styles = {
  marginBottom: 50,
}
export const TabComponent = ({
  activeKey,
  reversed = false,
  appearance = 'subtle',
  vertical = false,
  tabs = [],
  ...props
}) => {
  const [active, setActive] = useState(activeKey)

  useEffect(() => {
    setActive(activeKey)
    return null
  }, [activeKey])

  const handleSelect = () => {}

  return (
    <Nav
      {...props}
      vertical={vertical}
      activeKey={active}
      onSelect={handleSelect}
      style={styles}
    >
      <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
        Home
      </Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  )
}
