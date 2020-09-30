import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import useLayoutStyles from '../hooks/useLayoutStyles'
import PropTypes from 'prop-types'
import Link from '@material-ui/core/Link'

const Layout = ({ children = null, components }) => {
  const classes = useLayoutStyles()
  const preventDefault = (event) => event.preventDefault()

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Redspher Components
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {components.map((component) => (
              <ListItem button key={component.name}>
                <Link href={`#${component.name}`} key={component.name}>
                  <ListItemText primary={component.name} />
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  components: PropTypes.array,
  children: PropTypes.element
}

export default Layout
