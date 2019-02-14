import React from 'react'
import BulmaHero from 'react-bulma-components/lib/components/hero'
import Heading from 'react-bulma-components/lib/components/heading'
import Container from 'react-bulma-components/lib/components/container'
import Navbar from '../Navbar'

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
          <Heading>Hero title Primary</Heading>
          <Heading subtitle size={3}>Subtitle</Heading>
        </Container>
      </BulmaHero.Body>
    </BulmaHero>
  )
}

export default Hero
