import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica', sans-serif;
    line-height: 120%;
    background: #15161b;
    text-align: center;
    color: #fff;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
  }

  p,
  button {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
  }
`;

export default GlobalStyle;
