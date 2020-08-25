import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialised;
  }

  html, body, input {
    font-family: 'Roboto-slab', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  #root {
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  
  button {
    cursor: pointer;
  }

`;