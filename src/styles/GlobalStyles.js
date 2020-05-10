import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  body {
    margin:0;
    background: #fff;
    overscroll-behavior: none;
    width: 100%;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }
  button {
    background: #ffffff00;
    border: 0;
    outline: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  
  a { 
    text-decoration: none;
    color: #393939
  }
`;

export default GlobalStyles;
