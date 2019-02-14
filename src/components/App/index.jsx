import 'react-bulma-components/full'
import { GlobalStyle } from './styles'
import { theme } from '../../theme'
import { ThemeProvider } from 'styled-components'
import Content from '../Content'
import Navbar from '../Navbar'
import React from 'react'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <GlobalStyle />
        <Navbar />
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default App
