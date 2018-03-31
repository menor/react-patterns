import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Switch from './Switch'

const TOGGLE_CONTEXT = '__toggle__'

const ToggleOn = withToggle(({children, toggle: {on}}) => {
  return on ? children : null
})

const ToggleOff = withToggle(({children, toggle: {on}}) => {
  return on ? null : children
})

const ToggleButton = withToggle(({toggle: {toggle, on}, ...props}) => (
  <Switch on={on} toggle={toggle} {...props} />
))

export function withToggle(Component) {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT]
    return <Component toggle={toggleContext} {...props} />
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }

  return Wrapper
}

class HocToggle extends Component {
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

export default HocToggle
