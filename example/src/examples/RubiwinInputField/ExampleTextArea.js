import React from 'react'
import { RubiwinInputField } from 'redspher-components'
import 'redspher-components/dist/index.css'

const testProps = {
  className: 'test',
  id: 'id',
  name: 'name',
  onChange: () => {},
  multiline: true,
  rows: 5
}

/** Example of text Area */
const ExampleTextArea = () => <RubiwinInputField {...testProps} />

export default ExampleTextArea
