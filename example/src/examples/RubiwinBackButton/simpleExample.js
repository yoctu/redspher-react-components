import React from 'react'
import { RubiwinBackButton } from 'redspher-components'
import 'redspher-components/dist/index.css'

const simpleExample = () => (
  <RubiwinBackButton
    onClick={() => {
      window.alert('yay')
    }}
    text='ios'
  />
)

export default simpleExample
