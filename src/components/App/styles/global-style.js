import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body > #root > div {
    background-color: ${props => props.theme.globalBackgroundColor};
  }

  .app {
    display: flex;
    min-height: ${props => props.theme.globalSize};
    flex-direction: column;
    justify-content: space-between;
  }

  code {
    color: ${props => props.theme.globalCodeColor};
  }
`
export { GlobalStyle }
