import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   
   html {
      display: flex;
      justify-content: center;
   }

   body {
      margin: 0;
      width: 100%;
   }

   div {
      font-family: 'Roboto', Helvetica, sans-serif;
      font-weight: 500;
   }
`

export default GlobalStyle
