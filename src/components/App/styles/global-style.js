import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body  {
    background-color: #3F51B5;
  }

  body > #root > div {
    background-color: ${props => props.theme.globalBackgroundColor};
  }

  .flex-wrapper {
    display: flex;
    min-height: ${props => props.theme.globalSize};
    flex-direction: column;
    justify-content: space-between
  }
`

//     height:

export { GlobalStyle }
