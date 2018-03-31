import React, {Component} from 'react'
import Toggle from './components/Toggle'
import CompoundToggle from './components/CompoundToggle'
import ContextToggle from './components/ContextToggle'

class App extends Component {
  render() {
    return (
      <div>
        <h3>Regular Toggle</h3>
        <Toggle onToggle={on => console.log('toggle', on)} />
        <h3>Compound Toggle</h3>
        <CompoundToggle onToggle={on => console.log('toggle', on)}>
          <CompoundToggle.Off>Off</CompoundToggle.Off>
          <CompoundToggle.Button />
          <CompoundToggle.On>On</CompoundToggle.On>
        </CompoundToggle>
        <h3>Context Toggle</h3>
        <ContextToggle onToggle={on => console.log('toggle', on)}>
          <ContextToggle.Off>Off</ContextToggle.Off>
          <div>
            <ContextToggle.Button />
            <ContextToggle.On>On</ContextToggle.On>
          </div>
        </ContextToggle>
      </div>
    )
  }
}

export default App
