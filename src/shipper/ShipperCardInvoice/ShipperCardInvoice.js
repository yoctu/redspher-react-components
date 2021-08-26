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
  downloadAction,
  invoiceDateTranslate,
  dueDateTranslate,
  withoutTaxes,
  withTaxes,
  VATAmount,
  downloadTranslate
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
                {invoiceDateTranslate}
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
                  {dueDateTranslate}
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
              {withTaxes}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={`${style.textMedium}`}
              style={{ color: themeConstants.grey.main }}
            >
              {priceHt}
              {withoutTaxes}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={`${style.textMedium}`}
              style={{ color: themeConstants.grey.main }}
            >
              {VATAmount}: {vatAmount}
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
              {downloadTranslate}
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
  /** text to display as reference of the invoice */
  reference: PropTypes.string.isRequired,
  /** text to display as user reference of the invoice */
  userReference: PropTypes.string.isRequired,
  /** date to display as invoice date */
  invoiceDate: PropTypes.string.isRequired,
  /** date to displaya as due date of the invoice */
  dueDate: PropTypes.string.isRequired,
  /** number to display as ttc price of the invoice */
  priceTtc: PropTypes.number.isRequired,
  /** number to display as ht price of the invoice */
  priceHt: PropTypes.number.isRequired,
  /** price to display as vat amount of the invoice */
  vatAmount: PropTypes.number.isRequired,
  /** function to be executed when download button is clicked */
  downloadAction: PropTypes.func.isRequired
}

export default ShipperCardInvoice
