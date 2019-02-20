import React from 'react'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import { FormattedDate, FormattedTime, FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import PropTypes from 'prop-types'
import ButtonColumn from './Button-Column'

/* Heure Path  strong Chargement icon contenu redux sage
  hidden mobile dektop
*/

const Content = (props) => {
  const currentDate = Date.now()
  const formattedMessages = {
    date: {
      title: <FormattedMessage
        id='main.content.date.title'
        description='Title of the date section'
        key='date_title'
      />,
      description: <FormattedMessage
        id='main.content.date.description'
        description='Description of the date section'
        values={{
          date: <FormattedDate value={currentDate}/>,
          time: <FormattedTime value={currentDate}/>
        }}
        key='date_description'
      />
    },
    path: {
      title: <FormattedMessage
        id='main.content.path.title'
        description='Title of the path section'
        key='path_title'
      />,
      description: <FormattedMessage
        id='main.content.path.description'
        description='Description of the path section'
        key='path_description'
        values={{
          path: props.location.pathname
        }}
      />
    },
    button: {
      title: 'Button',
      description: <ButtonColumn />
    }
  }

  return (
    <Container>
      <Columns>
        { Object.keys(formattedMessages).map((name, index) => (
          <Columns.Column key={index}>
            <Section size='medium'>
              <Heading>
                {formattedMessages[name].title}
              </Heading>
              <Heading subtitle>
                {formattedMessages[name].description}
              </Heading>
            </Section>
          </Columns.Column>
        ))}
      </Columns>
    </Container>
  )
}

Content.propTypes = {
  location: PropTypes.object.isRequired
}

export default Content
