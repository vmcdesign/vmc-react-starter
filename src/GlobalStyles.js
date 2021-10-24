import { createGlobalStyle } from "styled-components"

const systemStack = [
  '-apple-system', 
  'BlinkMacSystemFont', 
  'Segoe UI', 
  'Roboto', 
  'Oxygen', 
  'Ubuntu', 
  'Cantarell', 
  'Fira Sans', 
  'Droid Sans', 
  'Helvetica Neue', 
  'sans-serif'
]

const codeStack = [
  'source-code-pro', 
  'Menlo', 
  'Monaco', 
  'Consolas', 
  'Courier New',
  'monospace'
]

const defaults = {
  font: 'Clear Sans',
  fontSystem: systemStack.join(', '),
  fontCode: codeStack.join(', '),
}

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color: hsl(234, 38%, 20%);
    font-size: 1rem;
    font-family: ${defaults.font}, ${defaults.fontSystem};
    font-weight: normal;
    line-height: 1.61;
    background-color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.3s ease-in-out; 
  }

  code {
    font-family: ${defaults.codeStack};
  }

  /**
  * Vertical rhythm by Syncope
  * http://nowodzinski.pl/syncope
  */

  h1, h2, h3 ,h4 h5, h6 {
    font-weight: bold;
    line-height: 1;
  }

  h1 {
    margin-top: 0;
    padding-top: 0;
    font-size: 2.074rem;
  }

  h2, 
  h1 > small {
    font-size: 1.728rem;
  }

  h3, 
  h2 > small {
    font-size: 1.44rem;
  }

  h4,
  h3 > small {
    font-size: 1.2rem;
  }

  h5,
  h4 > small {
    font-size: 1rem;
  }

  p {
    font-size: 1.00rem;
  }

  .lead {
    font-size: 1.44rem;
  }

  .display {
    font-size: 3rem;
  }

  .display > small {
    font-size: 2.5rem;
  }

  a {
    display: inline-block;
    font-weight: 500;
    text-decoration: none;
  }

  img {
    display: block;
    position: relative;
    max-width: 100%;
    width: 100%;
  }

  .btn, button {
    -webkit-appearance: none;
    appearance: none;
    border: transparent;
  }
`