import React from 'react'
import PropTypes from 'prop-types'
import { TableRow } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'

const PropsTableRow = ({ props, name }) => (
  <TableRow>
    <TableCell>{name}</TableCell>
    <TableCell>{props.description}</TableCell>
    <TableCell>{props.type.name}</TableCell>
    <TableCell>{props.defaultValue && props.defaultValue.value}</TableCell>
    <TableCell>{props.required && 'X'}</TableCell>
  </TableRow>
)

PropsTableRow.propTypes = {}

export default PropsTableRow
