import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import PropsTable from './propsTable'
import PropsTableRow from './propsTableRow'

const ComponentDoc = ({ component = null }) => {
  return (
    <div>
      {component && (
        <Container>
          <Typography variant='h4' gutterBottom color='primary'>
            {component.name}
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            {component.description}
          </Typography>
          <PropsTable>
            {Object.entries(component.props).map((prop) => {
              return (
                <PropsTableRow props={prop[1]} name={prop[0]} key={prop[0]} />
              )
            })}
          </PropsTable>
        </Container>
      )}
    </div>
  )
}

ComponentDoc.propTypes = {
  component: PropTypes.object
}

export default ComponentDoc
