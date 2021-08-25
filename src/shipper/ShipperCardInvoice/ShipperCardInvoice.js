import React from 'react'
import PropTypes from 'prop-types'
import { Card, Grid, CardContent, Typography, Divider } from '@material-ui/core'
import style from './ShipperCardInvoice.module.scss'
import { ShipperThemeProvider } from '../../index'
import themeConstants from '../theme/themeConstants'

const ShipperCardInvoice = ({
  title,
  reference,
  userReference,
  invoiceDate,
  dueDate,
  priceTtc,
  priceHt,
  vatAmount
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
          <Grid item xs={12}>
            <Typography
              style={{ color: themeConstants.grey.dark }}
              className={`${style.subtitleBold}`}
            >
              {userReference}
            </Typography>
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
            <Typography className={`${style.textMedium}`}>Download</Typography>
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

  vatAmount: PropTypes.number.isRequired
}

export default ShipperCardInvoice
