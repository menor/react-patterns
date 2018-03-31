import React from 'react'
import { withToggle } from './HocToggle'

const CustomToggle = withToggle(({ toggle: {on, toggle}}) => (
  <button onClick={toggle}>
    {on ? 'on' : 'off'}
  </button>
))

export default CustomToggle
