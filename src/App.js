import React, {Component} from 'react'
import Toggle from './components/Toggle'
import CompoundToggle from './components/CompoundToggle'

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
      </div>
    )
  }
}

export default App
