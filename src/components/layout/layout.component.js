import React from 'react';
import GlobalStyles, { theme } from '../../global.styles';
import { ThemeProvider } from 'styled-components';

import Header from '../header/header.component';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
