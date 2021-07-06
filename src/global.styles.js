import { createGlobalStyle } from 'styled-components';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

export const theme = {
  bg: '#fff',
  primary: '#b38ec7',
  secondary: '#f7c5c6',
  textPrimary: '#fff',
  textSecondary: '#000',
};

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-size: 17px;
    margin: 0;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: ${(props) => props.theme.bg};
    overflow-wrap: break-word;
    font-weight: 700;
    ${'' /* line-height: 1.7; */}
    -webkit-font-smoothing: antialiased;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.textPrimary}
  }
`;

export default GlobalStyles;
