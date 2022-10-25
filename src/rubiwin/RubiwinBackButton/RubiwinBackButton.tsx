import React from 'react'
import PropTypes from 'prop-types'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Box } from '@mui/material'

const RubiwinBackButton = ({ onClick, text }: any) => (
  <Box
    onClick={onClick}
    sx={{
      fontFamily: (theme) => theme.typography.fontFamily,
      cursor: 'pointer',
      color: (theme) => theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      padding: '5px'
    }}
  >
    <ArrowBackIosIcon />
    {text}
  </Box>
)

RubiwinBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default RubiwinBackButton
