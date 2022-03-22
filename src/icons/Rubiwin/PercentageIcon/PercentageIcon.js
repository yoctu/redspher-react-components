import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function PercentageIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M6.75705 10.4225C5.9311 10.4225 5.26219 10.1296 4.75034 9.54366C4.25011 8.94648 4 8.16901 4 7.21127C4 6.25352 4.25011 5.48169 4.75034 4.89578C5.26219 4.29859 5.9311 4 6.75705 4C7.57136 4 8.23445 4.29296 8.74631 4.87887C9.25816 5.46479 9.51409 6.24225 9.51409 7.21127C9.51409 8.18028 9.25816 8.95775 8.74631 9.54366C8.23445 10.1296 7.57136 10.4225 6.75705 10.4225ZM14.1557 4.08451H15.1852L6.8443 15.9155H5.81477L14.1557 4.08451ZM6.75705 9.66197C7.32707 9.66197 7.78076 9.44789 8.11812 9.01972C8.46711 8.58028 8.64161 7.97747 8.64161 7.21127C8.64161 6.44507 8.46711 5.84789 8.11812 5.41972C7.78076 4.98028 7.32707 4.76056 6.75705 4.76056C6.17539 4.76056 5.71588 4.98028 5.37852 5.41972C5.04116 5.85916 4.87248 6.45634 4.87248 7.21127C4.87248 7.9662 5.04116 8.56338 5.37852 9.00282C5.71588 9.44225 6.17539 9.66197 6.75705 9.66197ZM14.243 16C13.4286 16 12.7655 15.707 12.2537 15.1211C11.7418 14.5239 11.4859 13.7465 11.4859 12.7887C11.4859 11.831 11.7418 11.0592 12.2537 10.4732C12.7655 9.87606 13.4286 9.57747 14.243 9.57747C15.0689 9.57747 15.732 9.87606 16.2322 10.4732C16.7441 11.0592 17 11.831 17 12.7887C17 13.7465 16.7441 14.5239 16.2322 15.1211C15.732 15.707 15.0689 16 14.243 16ZM14.243 15.2394C14.8246 15.2394 15.2841 15.0197 15.6215 14.5803C15.9588 14.1408 16.1275 13.5437 16.1275 12.7887C16.1275 12.0338 15.9588 11.4366 15.6215 10.9972C15.2841 10.5577 14.8246 10.338 14.243 10.338C13.6729 10.338 13.2134 10.5577 12.8644 10.9972C12.5271 11.4254 12.3584 12.0225 12.3584 12.7887C12.3584 13.5549 12.5271 14.1577 12.8644 14.5972C13.2134 15.0254 13.6729 15.2394 14.243 15.2394Z'
        fill={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default PercentageIcon
