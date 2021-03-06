import {createGlobalStyle} from 'styled-components';

 export const GlobalStyle = createGlobalStyle`
    html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
  display: block;
  max-width: 100%;
  height: auto;
}

`
