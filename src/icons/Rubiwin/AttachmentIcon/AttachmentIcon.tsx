import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function AttachmentIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M12.1246 5.38053L6.87798 10.6272C6.13513 11.37 6.07643 12.5157 6.74685 13.1862C7.36651 13.8058 8.19132 13.8169 9.03657 13.2478L9.13749 13.1647L12.2126 10.0896L15.2877 7.01447C16.6199 5.68229 16.5339 3.88681 15.4688 2.82175C14.3788 1.73169 12.516 1.82715 11.3082 3.03496L5.39544 8.94773C3.74761 10.5956 3.01383 12.9942 4.92698 14.9073C6.83814 16.8185 9.48529 16.0642 11.0866 14.463L13.4472 12.156L15.8079 9.84895'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  )
}

export default AttachmentIcon
