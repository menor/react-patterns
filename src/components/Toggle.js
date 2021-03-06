import React, { Component } from 'react'
import Switch from './Switch'

class Toggle extends Component {
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
    const { on } = this.state

    return (
      <Switch on={on} onClick={this.toggle} />
    )
  }
}

export default Toggle
