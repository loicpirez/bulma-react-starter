import 'react-bulma-components/full'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from './styles'
import { theme } from '../../theme'
import { ThemeProvider } from 'styled-components'
import Footer from '../Footer'
import Main from '../Main'
import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import getLocale from '../../utils/get-locale'
import messages from '../../translations'
// import Navbar from '../Navbar'

// const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true
// DARK MODE

const App = () => {
  const [locale] = useState(getLocale())

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider theme={theme}>
        <div className='app'>
          <GlobalStyle />
          {/* The `Navbar` component can stay on the top without moving with the navigation.
            For the prupose of this starter, instead, we'll use Navbar inside of an `hero` of Bulma.
            Otherwise, uncomment the line below and the others commented lines inside `Hero` component (`../Main/Hero.jsx`),
            `Navbar` (`../Navbar`),`../theme/global.js` and comment the current `Navbar`. */ }
          {/* <Navbar /> */}
          <Router>
            <Route component={Main} />
          </Router>
          <Footer />
        </div>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
