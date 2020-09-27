import React from 'react'
import { RubiwinInputField } from 'redspher-components'
import 'redspher-components/dist/index.css'

const testProps = {
  className: 'test',
  id: 'id',
  name: 'name',
  onChange: () => {},
  type: 'number'
}

/** example with type number */
const ExampleTypeNumber = () => <RubiwinInputField {...testProps} />

export default ExampleTypeNumber
