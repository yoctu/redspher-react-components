import React from 'react'
import { RubiwinInputField, RubiwinInputLabel } from 'redspher-components'
import 'redspher-components/dist/index.css'

/** Example with label */
const ExampleLabel = () => (
  <>
    <RubiwinInputLabel htmlFor={'test'}>tests</RubiwinInputLabel>
    <RubiwinInputField id={'test'} />
  </>
)

export default ExampleLabel
