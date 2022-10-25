import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
  Radio,
  Tooltip,
  IconButton
} from '@mui/material'
import themeConstants from '../theme/themeConstants'
import VanIcon from '../../icons/Shipper/VanIcon'
import BreakIcon from '../../icons/Shipper/BreakIcon'
import TruckIcon from '../../icons/Shipper/TruckIcon'
import SemiIcon from '../../icons/Shipper/SemiIcon'
import InformationIcon from '../../icons/Shipper/InformationIcon'
import DriverIcon from '../../icons/Shipper/DriverIcon'
import TailLiftIcon from '../../icons/Shipper/TailLiftIcon'
import SideLoadIcon from '../../icons/Shipper/SideLoadIcon'
import WarningIcon from '../../icons/Shipper/WarningIcon'

const ShipperCard = ({
  startIcon,
  value,
  labelOne,
  labelTwo,
  disabled,
  onclickFnc,
  selectedValue,
  setSelectedValue,
  enableUnselect,
  tooltipValue,
  noInfoIcon,
  defaultVehicle = false,
  tooltipDefaultValue
}: any) => {
  const selectedValueIsArray = Array.isArray(selectedValue)
  const allowedIcons = new Map([
    ['van', VanIcon],
    ['break', BreakIcon],
    ['truck', TruckIcon],
    ['semi', SemiIcon],
    ['driver', DriverIcon],
    ['tailLift', TailLiftIcon],
    ['sideLoad', SideLoadIcon]
  ])

  const getIconByName = (name: any) => {
    if (allowedIcons.has(name)) {
      return allowedIcons.get(name)
    } else {
      console.log(
        "Requested icon does not exist or isn't allowed in this component."
      )
      return allowedIcons.get('van')
    }
  }

  // eslint-disable-next-line no-unused-vars
  const onclickAction = () => {
    if (disabled) return
    if (enableUnselect) {
      if (selectedValueIsArray) {
        selectedValue.includes(value)
          ? setSelectedValue(selectedValue.filter((val) => val !== value))
          : setSelectedValue([...selectedValue, value])
      } else {
        selectedValue === value ? setSelectedValue('') : setSelectedValue(value)
      }
    } else {
      if (!selectedValueIsArray) {
        setSelectedValue(value)
      }
    }
    if (onclickFnc) onclickFnc(value)
  }

  const [open, setOpen] = useState(false)
  const [openWarning, setOpenWarning] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  const handleWarningClose = () => {
    setOpenWarning(false)
  }

  const handleWarningOpen = () => {
    setOpenWarning(true)
  }

  return (
    // @ts-ignore
    <Card
      sx={{
        '&:not([disabled]):hover': {
          border: `1px solid ${themeConstants.primary.main}`
        },
        '&[aria-selected=true]': {
          border: `1px solid ${themeConstants.primary.main}`
        }
      }}
      disabled={disabled}
      onClick={onclickAction}
      aria-selected={
        selectedValueIsArray
          ? selectedValue.includes(value)
          : selectedValue === value
      }
    >
      <CardActionArea disabled={disabled} disableRipple>
        <CardContent sx={{ padding: '10px 15px' }}>
          <Grid container sx={{ height: '100%' }}>
            <Grid
              item
              xs={12}
              container
              justifyContent='center'
              sx={{
                '& img': {
                  height: '50px'
                }
              }}
            >
              {React.isValidElement(startIcon)
                ? startIcon
                : // @ts-ignore
                  React.createElement(getIconByName(startIcon), {})}
            </Grid>
            <Grid
              xs={12}
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
              sx={{ mt: '10px', mb: '5px' }}
            >
              <Grid item>
                <Typography
                  sx={{
                    color: themeConstants.black.main,
                    fontSize: (theme) => theme.spacing(1.5),
                    lineHeight: (theme) => theme.spacing(2),
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  {labelOne}
                </Typography>
              </Grid>
              {!noInfoIcon && (
                <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                  <Tooltip
                    title={<React.Fragment>{tooltipValue}</React.Fragment>}
                    open={open}
                    onClose={handleTooltipClose}
                    onOpen={handleTooltipOpen}
                    PopperProps={{
                      sx: {
                        '.MuiTooltip-tooltip': {
                          backgroundColor: '#FFFFFF',
                          boxShadow: '2px 2px 8px rgba(0, 59, 129, 0.1)',
                          borderRadius: 2
                        }
                      }
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: 'transparent',
                        marginLeft: '5px',
                        padding: 0,
                        width: '16px',
                        height: '16px',
                        '&:hover': {
                          backgroundColor: 'transparent'
                        },
                        '& svg': {
                          width: '16px',
                          height: '16px'
                        }
                      }}
                      disableRipple
                    >
                      {open ? (
                        <InformationIcon
                          primarycolor={themeConstants.primary.dark}
                          secondarycolor={themeConstants.primary.dark}
                        />
                      ) : (
                        <InformationIcon />
                      )}
                    </IconButton>
                  </Tooltip>
                </Grid>
              )}
              {defaultVehicle && (
                <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                  <Tooltip
                    title={
                      <React.Fragment>{tooltipDefaultValue}</React.Fragment>
                    }
                    open={openWarning}
                    onClose={handleWarningClose}
                    onOpen={handleWarningOpen}
                    PopperProps={{
                      sx: {
                        '.MuiTooltip-tooltip': {
                          backgroundColor: '#FFFFFF',
                          boxShadow: '2px 2px 8px rgba(0, 59, 129, 0.1)',
                          borderRadius: 2
                        }
                      }
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: 'transparent',
                        marginLeft: '5px',
                        padding: 0,
                        width: '16px',
                        height: '16px',
                        '&:hover': {
                          backgroundColor: 'transparent'
                        },
                        '& svg': {
                          width: '16px',
                          height: '16px'
                        }
                      }}
                      disableRipple
                    >
                      {openWarning ? (
                        <WarningIcon
                          primarycolor={themeConstants.primary.dark}
                          secondarycolor={themeConstants.primary.dark}
                        />
                      ) : (
                        <WarningIcon
                          primarycolor={themeConstants.secondary.main}
                          secondarycolor={themeConstants.secondary.main}
                        />
                      )}
                    </IconButton>
                  </Tooltip>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} container justifyContent='center'>
              <Typography
                sx={{
                  // @ts-ignore
                  color: (theme) => theme.palette.grey.main,
                  // @ts-ignore
                  fontSize: (theme) => theme.typography.sizes[1],
                  // @ts-ignore
                  lineHeight: (theme) => theme.typography.lineHeights[0]
                }}
              >
                {labelTwo}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent='center'
              sx={{ mt: 'auto' }}
            >
              <Radio
                disableRipple
                color='primary'
                checked={
                  selectedValueIsArray
                    ? selectedValue.includes(value)
                    : selectedValue === value
                }
                value={value}
                disabled={disabled}
                sx={{
                  height: '100%',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  },
                  '&.Mui-checked:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

ShipperCard.propTypes = {
  /** text to display as title for the card, it can be <Translate> component too */
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** id to pass to the function when the component is clicked */
  value: PropTypes.string.isRequired,
  /** text to display as reference of the invoice */
  labelOne: PropTypes.string.isRequired,
  /** date to display as invoice date */
  disabled: PropTypes.bool.isRequired,
  /** function to execute when the card is clicked and the component isn't disabled */
  onclickFnc: PropTypes.func,
  /** The getter of the useState, sent to the component to hold the checked value */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
  /** The setter of the ueState, sent to the component to set the checked value */
  setSelectedValue: PropTypes.func.isRequired,
  /** Enable the switch mode on the card, select/unselect like a checkbox the radio button */
  enableUnselect: PropTypes.bool.isRequired,

  tooltipValue: PropTypes.node,

  noInfoIcon: PropTypes.bool
}

export default ShipperCard
