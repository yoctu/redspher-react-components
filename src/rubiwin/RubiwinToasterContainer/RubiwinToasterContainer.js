import React from 'react'
import { ToastContainer } from 'react-toastify'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
// eslint-disable-next-line import/no-webpack-loader-syntax
import ToastifyCSS from '!style-loader!css-loader!react-toastify/dist/ReactToastify.css'

import ClearIcon from '../../icons/Rubiwin/ClearIcon'
import rubiwinBaseTheme from '../theme/RubiwinBaseTheme'
import { typographies } from '../theme/themeConstants'

const RubiwinToasterContainer = () => {
  return (
    <StyledContainer icon={false} closeButton={ClearIcon} draggable={false} />
  )
}

const StyledContainer = styled(ToastContainer)(
  () => css`
    ${ToastifyCSS}

    & {
      --toastify-color-success: ${rubiwinBaseTheme.palette.primary.main};
      --toastify-color-progress-success: ${rubiwinBaseTheme.palette.primary
        .main};
      --toastify-color-info: ${rubiwinBaseTheme.palette.primary.main};
      --toastify-color-progress-info: ${rubiwinBaseTheme.palette.primary.main};
      --toastify-color-error: ${rubiwinBaseTheme.palette.secondary.main};
      --toastify-color-progress-error: ${rubiwinBaseTheme.palette.secondary
        .main};
      --toastify-color-warning: ${rubiwinBaseTheme.palette.secondary.main};
      --toastify-color-progress-warning: ${rubiwinBaseTheme.palette.secondary
        .main};
    }

    .Toastify__toast {
      padding: 15px;
      box-shadow: 6px 6px 18px 2px rgba(0, 0, 0, 0.08);
      border-radius: 0;
      color: ${typographies.body1.color};
      font-size: ${typographies.body1.fontSize};
      line-height: ${typographies.body1.lineHeight};
      font-family: ${typographies.fontFamily};

      &:before {
        content: '';
        position: absolute;
        bottom: 15px;
        left: 15px;
        right: 15px;
        height: 3px;
        background-color: ${rubiwinBaseTheme.palette.grey.lighter};
      }
    }

    .Toastify__toast-body {
      display: block;
      margin: 0;
      padding: 0 15px 0 0;
    }

    .Toastify__progress-bar {
      bottom: 15px;
      left: 15px;
      height: 3px;
      width: calc(100% - 30px);
    }
  `
)

RubiwinToasterContainer.propTypes = {}

export default RubiwinToasterContainer
