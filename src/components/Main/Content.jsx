import React from 'react'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

const Content = () => {
  return (
    <Container>
      <div className='columns'>
        <div className='column'>
          <Section size='medium'>
            <Heading>Section</Heading>
            <Heading subtitle>
          A simple container to divide your page into <strong>sections</strong>, like the one you are currently
          reading
            </Heading>
          </Section>
        </div>
        <div className='column'>
          <Section size='medium'>
            <Heading>Section</Heading>
            <Heading subtitle>
          A simple container to divide your page into <strong>sections</strong>, like the one you are currently
          reading
            </Heading>
          </Section>
        </div>
        <div className='column'>
          <Section size='medium'>
            <Heading>Section</Heading>
            <Heading subtitle>
          A simple container to divide your page into <strong>sections</strong>, like the one you are currently
          reading
            </Heading>
          </Section>
        </div>

      </div>
    </Container>
  )
}

export default Content
