import React, { FC } from 'react';
import { LayoutProps } from '../types';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC<LayoutProps> = ({ isHomepage = false, children }) => (
  <>
    <Header isHomepage={isHomepage} />
    {children}
    <Footer />
  </>
);
