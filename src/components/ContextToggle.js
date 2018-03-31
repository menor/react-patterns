import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Switch from './Switch'

const TOGGLE_CONTEXT = '__toggle__'

function ToggleOn({children}, context) {
  const {on} = context[TOGGLE_CONTEXT]
  return on ? children : null
}

function ToggleOff({children}, context) {
  const {on} = context[TOGGLE_CONTEXT]
  return on ? null : children
}

function ToggleButton(props, context) {
  const {on, toggle} = context[TOGGLE_CONTEXT] 
  return <Switch on={on} onClick={toggle} props />
}

ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}

ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}

ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}

class Toggle extends Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton

  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }

  static defaultProps = {
    onToggle: () => {},
  }

  state = {on: false}

  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => {
        this.props.onToggle(this.state.on)
      },
    )

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle,
      },
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default Toggle
