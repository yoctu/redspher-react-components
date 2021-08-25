import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Divider,
  Button,
  Box
} from '@material-ui/core'
import style from './ShipperCardInvoice.module.scss'
import { ShipperThemeProvider } from '../../index'
import themeConstants from '../theme/themeConstants'
import DownloadIcon from '../../icons/Shipper/DownloadIcon'
import People2Icon from '../../icons/Shipper/People2Icon'

const ShipperCardInvoice = ({
  title,
  reference,
  userReference,
  invoiceDate,
  dueDate,
  priceTtc,
  priceHt,
  vatAmount,
  downloadAction
}) => (
  <ShipperThemeProvider injectFirst>
    <Card>
      <CardContent>
        <Grid>
          <Grid item xs={12}>
            <Typography
              style={{ color: themeConstants.grey.dark }}
              className={`${style.textSmall}`}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{ color: themeConstants.black.dark }}
              className={`${style.textLarge}`}
            >
              {reference}
            </Typography>
          </Grid>
          <Grid container item xs={12} direction='row' alignItems='center'>
            <Grid item>
              <People2Icon />
            </Grid>
            <Grid item>
              <Box mb={2} ml={2}>
                <Typography
                  style={{ color: themeConstants.grey.dark }}
                  className={`${style.textSmall}`}
                >
                  {userReference}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid item xs={6}>
              <Typography
                className={`${style.textSmall}`}
                style={{ color: themeConstants.grey.main }}
              >
                Invoice date
              </Typography>
              <Typography className={`${style.textMedium}`}>
                {invoiceDate}
              </Typography>
            </Grid>
            <Grid container item xs={6} justifyContent='center'>
              <Grid item justifyContent='left'>
                <Typography
                  className={`${style.textSmall}`}
                  style={{ color: themeConstants.grey.main }}
                >
                  Due date
                </Typography>
                <Typography className={`${style.textMedium}`}>
                  {dueDate}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <Typography
              style={{ color: themeConstants.primary.main }}
              className={`${style.textLargeXl}`}
            >
              {priceTtc}
              {themeConstants.devise.euro} TTC
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={`${style.textMedium}`}
              style={{ color: themeConstants.grey.main }}
            >
              {priceHt}
              {themeConstants.devise.euro} HT
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={`${style.textMedium}`}
              style={{ color: themeConstants.grey.main }}
            >
              VAT amount: {vatAmount}
              {themeConstants.devise.euro}
            </Typography>
          </Grid>
          <Divider />
          <Grid container item xs={12} justifyContent='center'>
            <Button
              startIcon={<DownloadIcon />}
              color='primary'
              variant='text'
              onClick={downloadAction}
            >
              Download
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </ShipperThemeProvider>
)

ShipperCardInvoice.propTypes = {
  /** text to display as title for the card, it can be <Translate> component too */
  title: PropTypes.string.isRequired,

  reference: PropTypes.string.isRequired,

  userReference: PropTypes.string.isRequired,

  invoiceDate: PropTypes.string.isRequired,

  dueDate: PropTypes.string.isRequired,

  priceTtc: PropTypes.number.isRequired,

  priceHt: PropTypes.number.isRequired,

  vatAmount: PropTypes.number.isRequired,

  downloadAction: PropTypes.func.isRequired
}

export default ShipperCardInvoice
