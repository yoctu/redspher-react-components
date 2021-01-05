import React, { useEffect, useState } from 'react'
import Layout from './components/layout'
import useComponentData from './hooks/useComponentData'
import ComponentDoc from './components/componentDoc'
import ExampleComponent from './components/exampleComponent'
import Example from './components/example'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

const App = () => {
  const components = useComponentData()
  const [selectedComponent, setSelectedComponent] = useState(null)

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setSelectedComponent(window.location.hash.substr(1))
    })
    return () => {
      window.removeEventListener('hashchange')
    }
  }, [])

  const filterSelectedComponent = () =>
    components.filter((component) => selectedComponent === component.name)[0]

  return (
    <Layout components={components}>
      <Example>
        {selectedComponent &&
          filterSelectedComponent().examples.map((example) => (
            <ExampleComponent
              example={example}
              key={example.name}
              selectedComponent={selectedComponent}
            />
          ))}
      </Example>
      <ComponentDoc component={filterSelectedComponent()} />
    </Layout>
  )
}

export default App
