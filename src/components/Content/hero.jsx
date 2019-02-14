import React from 'react'
import BulmaHero from 'react-bulma-components/lib/components/hero'
import Heading from 'react-bulma-components/lib/components/heading'
import Container from 'react-bulma-components/lib/components/container'
import Section from 'react-bulma-components/lib/components/section'
import Footer from 'react-bulma-components/lib/components/footer'
import Content from 'react-bulma-components/lib/components/content'

const Hero = () => {
  return (
    <div className='flex-wrapper'>
      <div className='the-container'>
        {/* <BulmaHero color='primary' size='medium'>
          <BulmaHero.Body>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={3}>Subtitle</Heading>
            </Container>
          </BulmaHero.Body>
        </BulmaHero>
        <Section size='medium'>
          <Container>
            <Heading>Section</Heading>
            <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
            </Heading>
          </Container>
        </Section>
        <Section size='medium'>
          <Container>
            <Heading subtitle>
            Push the button below to triger an action.
            </Heading>
          </Container>
        </Section> */}
      </div>
      <div className='the-footer'>
        <Footer style={{ backgroundColor: 'red' }}>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
                <strong>Bulma</strong> by <a href='http://jgthms.com'>Jeremy Thomas</a>. The source code is licensed
                <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content is licensed{' '}
                <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
              </p>
            </Content>
          </Container>
        </Footer>
      </div>
    </div>
  )
}

export default Hero
