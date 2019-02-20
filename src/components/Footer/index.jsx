import React from 'react'
import BulmaFooter from 'react-bulma-components/lib/components/footer'
import Container from 'react-bulma-components/lib/components/container'
import Content from 'react-bulma-components/lib/components/content'

// TODO: Translate

const Footer = () => {
  return (
    <BulmaFooter>
      <Container>
        <Content style={{ textAlign: 'center' }}>
          <p>
            <strong>Bulma</strong> by <a href='http://jgthms.com'>Jeremy Thomas</a>. The source code is license{' '}
            <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content is licensed{' '}
            <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
          </p>
        </Content>
      </Container>
    </BulmaFooter>
  )
}

export default Footer
