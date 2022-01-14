import React from 'react'
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
} from '@material-ui/core'
import style from './ShipperCard.module.scss'
import { ShipperThemeProvider } from '../../index'
import themeConstants from '../theme/themeConstants'
import VanIcon from '../../icons/Shipper/VanIcon'
import BreakIcon from '../../icons/Shipper/BreakIcon'
import TruckIcon from '../../icons/Shipper/TruckIcon'
import SemiIcon from '../../icons/Shipper/SemiIcon'
import InformationIcon from '../../icons/Shipper/InformationIcon'
import DriverIcon from '../../icons/Shipper/DriverIcon'
import TailLiftIcon from '../../icons/Shipper/TailLiftIcon'
import SideLoadIcon from '../../icons/Shipper/SideLoadIcon'

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
  noInfoIcon
}) => {
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

  const getIconByName = (name) => {
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

  return (
    <ShipperThemeProvider injectFirst>
      <Card
        onClick={onclickAction}
        className={`${
          disabled
            ? style.disabledBorder
            : (
                selectedValueIsArray
                  ? selectedValue.includes(value)
                  : selectedValue === value
              )
            ? style.blueBorder
            : style.noBorder
        } ${style.card}`}
      >
        <CardActionArea
          disabled={disabled}
          style={{ height: '100%' }}
          disableRipple
        >
          <CardContent style={{ padding: '10px 15px' }}>
            <Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent='center'
                className={style.iconContainer}
              >
                {React.isValidElement(startIcon)
                  ? startIcon
                  : React.createElement(getIconByName(startIcon), {})}
              </Grid>
              <Grid
                xs={12}
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                className={style.title}
              >
                <Grid item>
                  <Typography
                    style={{ color: themeConstants.black.main }}
                    className={style.textMedium}
                  >
                    {labelOne}
                  </Typography>
                </Grid>
                {!noInfoIcon && (
                  <Grid item className={style.tooltipContainer}>
                    <Tooltip
                      title={<React.Fragment>{tooltipValue}</React.Fragment>}
                    >
                      <IconButton className={style.tooltipButton}>
                        <InformationIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12} container justifyContent='center'>
                <Typography
                  style={{ color: themeConstants.grey.main }}
                  className={`${style.textSmall}`}
                >
                  {labelTwo}
                </Typography>
              </Grid>
              <Grid item xs={12} container justifyContent='center'>
                <Radio
                  color='primary'
                  checked={
                    selectedValueIsArray
                      ? selectedValue.includes(value)
                      : selectedValue === value
                  }
                  value={value}
                  disabled={disabled}
                  style={{ height: '100%' }}
                />
                <br />
                <br />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </ShipperThemeProvider>
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
