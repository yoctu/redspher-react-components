import React from 'react'
import { RubiwinInputField } from 'redspher-components'
import 'redspher-components/dist/index.css'

const testProps = {
  className: 'test',
  id: 'id',
  name: 'name',
  onChange: () => {},
  placeholder: 'placeholder'
}

/** Simple input field */
const ExampleRubiwinInputField = () => <RubiwinInputField {...testProps} />

export default ExampleRubiwinInputField
