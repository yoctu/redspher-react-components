import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'redspher-components/dist/index.css'
import CodeExample from './CodeExample'
import Button from '@material-ui/core/Button'
import { Box, ThemeProvider } from '@material-ui/core'
import { rubiwinTheme } from 'redspher-components'

const ExampleComponent = ({ example, selectedComponent }) => {
  const [showCode, setShowCode] = useState(false)
  const { code, description, name } = example

  const DemoComponent = require(`./../examples/${selectedComponent}/${name}`)
    .default

  return (
    <>
      {description && <h4>{description}</h4>}
      <Box mb={1}>
        <ThemeProvider theme={rubiwinTheme}>
          <DemoComponent />
        </ThemeProvider>
      </Box>
      <Box mb={1}>
        <Button
          variant='contained'
          color='primary'
          size='small'
          onClick={() => setShowCode(!showCode)}
        >
          Show Code
        </Button>
      </Box>
      {showCode && <CodeExample>{code}</CodeExample>}
    </>
  )
}

ExampleComponent.propTypes = {
  example: PropTypes.object
}

export default ExampleComponent
