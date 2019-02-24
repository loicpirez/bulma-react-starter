import BulmaHero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Navbar from '../Navbar'
import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const Hero = () => {
  return (
    <BulmaHero color='primary' size='medium' gradient>
      <BulmaHero.Head>
        <Container>
          <Navbar/>
        </Container>
      </BulmaHero.Head>
      <BulmaHero.Body>
        <Container>
          <Heading>
            <FormattedMessage
              id='main.hero.title'
              description='Title of the hero'/>
          </Heading>
          <Heading subtitle size={3}>
            <FormattedHTMLMessage
              id='main.hero.description'
              description='Description of the hero'/>
          </Heading>
        </Container>
      </BulmaHero.Body>
    </BulmaHero>
  )
}

export default Hero
