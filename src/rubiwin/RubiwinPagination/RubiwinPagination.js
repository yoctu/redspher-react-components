import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, PaginationItem } from '@mui/material'
import CaretLeftIcon from '../../icons/Rubiwin/CaretLeftIcon'
import CaretRightIcon from '../../icons/Rubiwin/CaretRightIcon'

const RubiwinPagination = ({
  count,
  onPageChange,
  table,
  page = 1,
  rowsPerPage = 10,
  spacingScrollTop = 15
}) => {
  const scrollToTop = (event, newPage) => {
    if (page !== newPage) {
      if (
        table &&
        window.scrollY > table.current.offsetTop - spacingScrollTop
      ) {
        window.scrollTo({
          top: table.current.offsetTop - spacingScrollTop,
          behavior: 'smooth'
        })
      }

      onPageChange(event, newPage)
    }
  }

  return (
    <Pagination
      count={Math.ceil(count / rowsPerPage)}
      defaultPage={page}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: CaretLeftIcon, next: CaretRightIcon }}
          {...item}
        />
      )}
      onChange={scrollToTop}
      color='primary'
    />
  )
}

RubiwinPagination.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  table: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  spacingScrollTop: PropTypes.number
}

export default RubiwinPagination
