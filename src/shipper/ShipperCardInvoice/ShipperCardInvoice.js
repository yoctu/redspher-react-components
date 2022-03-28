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
} from '@mui/material'
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
  <Card
    sx={{
      width: '270px',
      '&:hover': {
        border: '1px solid',
        borderColor: 'primary.main'
      }
    }}
  >
    <CardContent>
      <Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: 'grey.dark',
              fontSize: (theme) => theme.typography.sizes[1],
              lineHeight: (theme) => theme.typography.lineHeights[0]
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: 'black.dark',
              fontSize: (theme) => theme.typography.sizes[3],
              lineHeight: (theme) => theme.typography.lineHeights[2],
              fontWeight: 'bold',
              mt: (theme) => theme.spacing(0.25),
              mb: (theme) => theme.spacing(0.5)
            }}
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
                sx={{
                  color: 'grey.dark',
                  fontSize: (theme) => theme.typography.sizes[1],
                  lineHeight: (theme) => theme.typography.lineHeights[0]
                }}
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
              sx={{
                color: 'grey.main',
                fontSize: (theme) => theme.typography.sizes[1],
                lineHeight: (theme) => theme.typography.lineHeights[0]
              }}
            >
              {invoiceDateTranslate}
            </Typography>
            <Typography
              sx={{
                fontSize: (theme) => theme.typography.sizes[2],
                lineHeight: (theme) => theme.typography.lineHeights[1]
              }}
            >
              {invoiceDate}
            </Typography>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
            <Grid item justifyContent='left'>
              <Typography
                sx={{
                  color: 'grey.main',
                  fontSize: (theme) => theme.typography.sizes[1],
                  lineHeight: (theme) => theme.typography.lineHeights[0]
                }}
              >
                {dueDateTranslate}
              </Typography>
              <Typography
                sx={{
                  fontSize: (theme) => theme.typography.sizes[2],
                  lineHeight: (theme) => theme.typography.lineHeights[1]
                }}
              >
                {dueDate}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Typography
            sx={{
              color: 'primary.main',
              fontSize: (theme) => theme.typography.sizes[4],
              lineHeight: (theme) => theme.typography.lineHeights[3],
              fontWeight: 'bold',
              mb: (theme) => theme.spacing(0.5)
            }}
          >
            {priceTtc}
            {withTaxes}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: 'grey.main',
              fontSize: (theme) => theme.typography.sizes[2],
              lineHeight: (theme) => theme.typography.lineHeights[1]
            }}
          >
            {priceHt}
            {withoutTaxes}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              color: 'grey.main',
              fontSize: (theme) => theme.typography.sizes[2],
              lineHeight: (theme) => theme.typography.lineHeights[1]
            }}
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
