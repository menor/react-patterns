import React, {Component} from 'react'
import Toggle from './components/Toggle'
import CompoundToggle from './components/CompoundToggle'
import ContextToggle from './components/ContextToggle'
import HocToggle from './components/HocToggle'
import CustomToggle from './components/HigherOrderableToggle'
import CustomEvent from './components/CustomEvent'

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

        <h3>HOC Toggle</h3>
        <HocToggle onToggle={on => console.log('toggle', on)}>
          <CustomToggle />
          <HocToggle.Off>The button is off</HocToggle.Off>
          <HocToggle.On>The button is on</HocToggle.On>

          <CustomEvent event="onClick" on={e => console.log(e.type)} />
        </HocToggle>
      </div>
    )
  }
}

export default App
