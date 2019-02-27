import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container } from './styles'
import Message from 'react-bulma-components/lib/components/message'
import { FormattedMessage } from 'react-intl'

// Error: notification https://github.com/fkhadra/react-toastify#le-style
// Fade

const LoremIpsumArticle = (props) => {
  const ArticleContent = () => {
    // FADE ON TEXT CHANGE
    if (props.error !== '') {
      // return <span>{props.error.toString()}</span>
      return <FormattedMessage
        id='main.lorem-ipsum-article.message.error'
        description='Error text on message'
        key='message-error'
      />
    } else if (props.apiResponse === '' && props.loading === false) {
      return <FormattedMessage
        id='main.lorem-ipsum-article.message.waiting'
        description='Waiting text on message'
        key='message-error'
      />
    } else if (props.loading === true) {
      return <FormattedMessage
        id='main.lorem-ipsum-article.message.loading'
        description='Loading text on message'
        key='message-loading'
      />
    } else if (props.apiResponse !== '') {
      return <span>{props.apiResponse}</span>
    }
  }

  return (
    <Container>
      <Message color='info'>
        <Message.Body>
          <ArticleContent />
        </Message.Body>
      </Message>
    </Container>
  )
}

const mapStateToProps = ({ loading, error, apiResponse }) => ({ loading, error, apiResponse })

LoremIpsumArticle.propTypes = {
  getApi: PropTypes.func,
  apiResponse: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string
}

export default connect(mapStateToProps, null)(LoremIpsumArticle)
