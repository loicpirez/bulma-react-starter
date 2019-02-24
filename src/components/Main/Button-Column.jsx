import React from 'react'
import { Button } from 'react-bulma-components/full'
import { connect } from 'react-redux'
import { getNews } from '../../actions'
import PropTypes from 'prop-types'

// API: https://baconipsum.com/api/?type=meat-and-filler
// Language
// Loading ...
// Success : fetch success
// Error: notification https://github.com/fkhadra/react-toastify#le-style

const ButtonColumn = (props) => {
  getNews()
  return (
    <React.Fragment>
      <br/>

      <Button
        fullwidth={true}
        color='link'
        loading={false}
        rounded={true}
        onClick={props.getNews}
      >
      Fetch lorem ipsum online
      </Button>
      <hr/>
      <article className='message is-info'>
        <div className='message-body'>
        Void
        </div>
      </article>
    </React.Fragment>
  )
}

const mapDispatchToProps = {
  getNews: getNews
}

ButtonColumn.propTypes = {
  getNews: PropTypes.func
}

export default connect(null, mapDispatchToProps)(ButtonColumn)
