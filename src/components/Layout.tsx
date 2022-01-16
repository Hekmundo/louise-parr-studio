import React, { FC } from 'react';
import { LayoutProps } from '../types';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
