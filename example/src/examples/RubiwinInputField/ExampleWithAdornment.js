import React from 'react'
import { RubiwinInputField } from 'redspher-components'
import 'redspher-components/dist/index.css'
import MailIcon from '../../../icons/MailIcon/MailIcon'

const testProps = {
  className: 'test',
  id: 'id',
  name: 'name',
  onChange: () => {},
  endAdornment: <MailIcon />
}

/** Example with icon */
const ExampleTextArea = () => <RubiwinInputField {...testProps} />

export default ExampleTextArea
