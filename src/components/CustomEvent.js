import React from 'react'
import {withToggle} from './HocToggle'

const CustomEvent = withToggle(({toggle, on, event}) => {
  const props = {[event]: on}
  return toggle.on ? <button {...props}>The {event} event</button> : null
})

export default CustomEvent
