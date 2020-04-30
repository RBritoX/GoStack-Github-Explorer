import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  html,
  body {
    min-width: 100%;
    min-height: 100%;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px
  }

  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button {
    font: 1.6rem "Roboto", Arial, Helvetica, sans-serif;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
