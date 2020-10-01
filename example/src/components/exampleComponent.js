import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'redspher-components/dist/index.css'

const ExampleComponent = ({ example }) => {
  const [showCode, setShowCode] = useState(false)
  const { code, description, name } = example

  //const EComponent = require(`redspher-components/RubiwinButton`).default

  //console.log(ExComponent)

  return <>{}</>
}

ExampleComponent.propTypes = {
  example: PropTypes.object
}

export default ExampleComponent
