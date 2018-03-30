import React, { Component } from 'react'
import Switch from './Switch'

const ToggleOn = ({on, children}) =>
  on ? children : null

const ToggleOff  = ({on, children}) =>
  on ? null : children

const ToggleButton = ({on, toggle, ...props}) =>
  (<Switch on={on} onClick={toggle} {...props} />)

class Toggle extends Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton

  state = {on: false}

  static defaultProps = {
    onToggle: () => {}
  }

  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => { this.props.onToggle(this.state.on) }
    )

  render() {
    const children = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    )
    return <div>{children}</div>
  }
}

export default Toggle
