import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'swiper/css';
import 'swiper/css/bundle';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #fff;
    font-family: 'Noto Sans KR', -apple-system, system-ui, BlinkMacSystemFont, Roboto, Arial, Helvetica, sans-serif, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.5)
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
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .hidden {
    height: 0;
    line-height: 0;
    overflow: hidden;
    position: absolute;
    text-indent: -9999px;
    width: 0;
  }
`;

export default GlobalStyle;
