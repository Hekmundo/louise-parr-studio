import React, { FC } from 'react';
import { LayoutProps } from '../types';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="layout-container">
    <Header />
    {children}
    <Footer />
  </div>
);
