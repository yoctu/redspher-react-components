import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, PaginationItem } from '@mui/material'
import CaretLeftIcon from '../../icons/Rubiwin/CaretLeftIcon'
import CaretRightIcon from '../../icons/Rubiwin/CaretRightIcon'

const RubiwinPagination = ({
  count,
  onPageChange,
  page = 1,
  rowsPerPage = 10
}) => (
  <Pagination
    count={Math.ceil(count / rowsPerPage)}
    defaultPage={page}
    renderItem={(item) => (
      <PaginationItem
        components={{ previous: CaretLeftIcon, next: CaretRightIcon }}
        {...item}
      />
    )}
    onChange={onPageChange}
    color='primary'
  />
)

RubiwinPagination.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number
}

export default RubiwinPagination
