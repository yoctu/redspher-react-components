import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'redspher-components/dist/index.css'
import CodeExample from './CodeExample'
const components = require('redspher-components')

const ExampleComponent = ({ example, selectedComponent }) => {
  const [showCode, setShowCode] = useState(true)
  const { code, description, name } = example

  const DemoComponent = components[selectedComponent]

  return (
    <>
      {description && <h4>{description}</h4>}

      {/*<CodeExample>{code}</CodeExample>*/}
    </>
  )
}

ExampleComponent.propTypes = {
  example: PropTypes.object
}

export default ExampleComponent
