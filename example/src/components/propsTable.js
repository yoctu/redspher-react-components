import React from 'react'
import PropTypes from 'prop-types'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import { TableBody, TableHead } from '@material-ui/core'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const PropsTable = ({ children }) => (
  <TableContainer component={Paper}>
    <Table size='small'>
      <TableHead>
        <TableRow>
          <TableCell>name</TableCell>
          <TableCell>description</TableCell>
          <TableCell>type</TableCell>
          <TableCell>default</TableCell>
          <TableCell>Required</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{children}</TableBody>
    </Table>
  </TableContainer>
)

PropsTable.propTypes = {
  children: PropTypes.node
}

export default PropsTable
