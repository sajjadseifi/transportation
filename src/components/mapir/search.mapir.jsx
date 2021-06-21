//default
import React, { useEffect, useState } from 'react'
import { Icon, Input, InputGroup, Loader } from 'rsuite'
import classes from './map.module.css'
const styles = {
  width: '100%',
  height: 36,
}
const buttonStyle = {
  height: '100%',
}
const inputStyle = {
  padding: '0 40px',
}
let markerStyle = {
  color: 'red',
  cursor: 'default',
}

export const SeachInputMapIr = ({
  search,
  inputProps,
  onChange = (_value) => {},
  onSearch = (_value) => {},
  loading = false,
}) => {
  const [input, setInput] = useState(search || '')
  useEffect(() => {
    if (input !== search) changeHandler(search || '')
  }, [search])

  const clearHandler = () => {
    if (!input) return
    changeHandler('')
  }
  const changeHandler = (value) => {
    setInput(value)
    onChange(value)
  }

  const addonsIcon = input ? 'times-circle' : 'map-marker'
  const mkstyl = { ...markerStyle, cursor: input ? 'hover' : '' }
  return (
    <div className={classes.SeachInputMapIr}>
      <InputGroup inside style={styles}>
        <InputGroup.Button
          disabled={!input}
          onClick={() => onSearch(input)}
          style={buttonStyle}
        >
          <Icon icon="search" />
        </InputGroup.Button>
        <Input
          value={input}
          onChange={changeHandler}
          style={inputStyle}
          {...inputProps}
        />
        <InputGroup.Addon onClick={clearHandler} style={buttonStyle}>
          <Icon style={mkstyl} size="lg" icon={addonsIcon} />
        </InputGroup.Addon>
      </InputGroup>
      {loading && (
        <div className={classes.Loading_SeachInputMapIr}>
          <Loader />
        </div>
      )}
    </div>
  )
}
