import React from 'react'
import { Button } from 'react-bulma-components/full'
import { connect } from 'react-redux'
import { getApi } from '../../actions'
import PropTypes from 'prop-types'
import { Container } from './styles'
import { FormattedMessage } from 'react-intl'

const ButtonColumn = (props) => {
  const apiUrl = 'https://baconipsum.com/api/?type=meat-and-filler'

  return (
    <React.Fragment>
      <Container>
        <FormattedMessage
          id='main.button-column.container.title'
          description='Button introduction'
          key='container-title'
        />
      </Container>
      <Button
        fullwidth={false}
        color='link'
        loading={props.loading}
        rounded={true}
        inverted={false}
        outlined={true}
        onClick={() => { props.getApi(apiUrl) }}
      >
        <FormattedMessage
          id='main.button-column.button.title'
          description='Button title'
          key='button-title'
        />
      </Button>
    </React.Fragment>
  )
}

const mapDispatchToProps = {
  getApi: getApi
}

const mapStateToProps = ({ loading }) => ({ loading })

ButtonColumn.propTypes = {
  getApi: PropTypes.func,
  loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonColumn)
