import React from 'react'
import { Box, Dialog, makeStyles, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    background: '#FFFFFF',
    borderRadius: '6px',
    boxShadow: 'none'
  },
  icon: {
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
    color: theme.palette.grey.main
  }
}))

function PaperComponent(props) {
  const classes = useStyles()
  return (
    <Paper
      className={classes.box}
      {...props}
      classes={{ root: classes.root }}
    />
  )
}

const RubiwinModal = ({ children, title, open, onClose, ...props }) => {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperComponent={PaperComponent}
      {...props}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={2}
      >
        <Typography component='h3' variant='h3'>
          {title}
        </Typography>
        <CloseIcon onClick={onClose} className={classes.icon} />
      </Box>
      {children}
    </Dialog>
  )
}

export default RubiwinModal
