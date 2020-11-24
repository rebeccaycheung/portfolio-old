import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  
  body {
    margin: 0 auto;
    background: #f8f8f8;
    color: #1d1d1d;
    font-family: 'Roboto', 'Arial', 'san-serif';
    font-size: 14px;
  }

  h1 {
    margin: 0 auto;
    font-size: 30px;
    font-weight: 500;
  }
`
