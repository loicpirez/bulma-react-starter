import 'react-bulma-components/full'
import { GlobalStyle } from './styles'
import { theme } from '../../theme'
import { ThemeProvider } from 'styled-components'
import Main from '../Main'
// import Navbar from '../Navbar'
import React from 'react'
import Footer from '../Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <GlobalStyle />
        {/* <Navbar /> */}
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
