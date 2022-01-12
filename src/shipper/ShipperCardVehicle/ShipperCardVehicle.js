import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  Radio,
  Tooltip,
  IconButton
} from '@material-ui/core'
import style from './ShipperCardVehicle.module.scss'
import { ShipperThemeProvider } from '../../index'
import themeConstants from '../theme/themeConstants'
import Truck01Icon from '../../icons/Shipper/Truck01Icon'
import Truck02Icon from '../../icons/Shipper/Truck02Icon'
import Truck03Icon from '../../icons/Shipper/Truck03Icon'
import Truck04Icon from '../../icons/Shipper/Truck04Icon'
import InformationIcon from '../../icons/Shipper/InformationIcon'
import DriverIcon from '../../icons/Shipper/DriverIcon'
import TailLiftIcon from '../../icons/Shipper/TailLiftIcon'
import SideLoadIcon from '../../icons/Shipper/SideLoadIcon'

const ShipperCardVehicle = ({
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
  const allowedIcons = new Map([
    ['truck01', Truck01Icon],
    ['truck02', Truck02Icon],
    ['truck03', Truck03Icon],
    ['truck04', Truck04Icon],
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
      return allowedIcons.get('truck01')
    }
  }

  // eslint-disable-next-line no-unused-vars
  const onclickAction = () => {
    if (disabled) return
    if (enableUnselect) {
      selectedValue === value ? setSelectedValue('') : setSelectedValue(value)
    } else {
      setSelectedValue(value)
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
            : selectedValue === value
            ? style.blueBorder
            : style.noBorder
        } ${style.cardHover}`}
      >
        <CardActionArea disabled={disabled}>
          <CardContent style={{ paddingTop: '5px', paddingBottom: 0 }}>
            <Grid>
              <Grid item xs={12} container justifyContent='center'>
                {React.createElement(getIconByName(startIcon), {})}
              </Grid>
              <Grid
                xs={12}
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
              >
                <Grid item>
                  <Typography
                    style={{ color: themeConstants.black.main }}
                    className={style.textMedium}
                  >
                    {labelOne}
                  </Typography>
                </Grid>
                <Grid item>
                  <Box ml={0.4} mt={0.25}>
                    {!noInfoIcon ? (
                      <Tooltip
                        title={<React.Fragment>{tooltipValue}</React.Fragment>}
                      >
                        <IconButton className={style.tooltipButton}>
                          <InformationIcon />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      ''
                    )}
                  </Box>
                </Grid>
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
                  checked={selectedValue === value}
                  value={value}
                  disabled={disabled}
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

ShipperCardVehicle.propTypes = {
  /** text to display as title for the card, it can be <Translate> component too */
  startIcon: PropTypes.string.isRequired,
  /** id to pass to the function when the component is clicked */
  value: PropTypes.string.isRequired,
  /** text to display as reference of the invoice */
  labelOne: PropTypes.string.isRequired,
  /** date to display as invoice date */
  disabled: PropTypes.bool.isRequired,
  /** function to execute when the card is clicked and the component isn't disabled */
  onclickFnc: PropTypes.func,
  /** The getter of the useState, sent to the component to hold the checked value */
  selectedValue: PropTypes.string.isRequired,
  /** The setter of the ueState, sent to the component to set the checked value */
  setSelectedValue: PropTypes.func.isRequired,
  /** Enable the switch mode on the card, select/unselect like a checkbox the radio button */
  enableUnselect: PropTypes.bool.isRequired,

  tooltipValue: PropTypes.node,

  noInfoIcon: PropTypes.bool
}

export default ShipperCardVehicle
