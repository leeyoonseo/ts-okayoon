import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #fff;
    font-family: 'Noto Sans KR', -apple-system, system-ui, BlinkMacSystemFont, Roboto, Arial, Helvetica, sans-serif, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input, 
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Noto Sans KR', -apple-system, system-ui, BlinkMacSystemFont, Roboto, Arial, Helvetica, sans-serif, sans-serif;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
