import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    font-size: 100%;
  }

  html, body, [data-js="root"] {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    color: #222;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  img {
    user-select: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  [data-js="root"] {
    isolation: isolate;
  }
`

export default GlobalStyles
