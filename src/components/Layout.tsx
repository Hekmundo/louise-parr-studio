import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  isHomepage?: boolean;
  children: ReactNode;
}

export const Layout = ({ isHomepage = false, children }: LayoutProps) => (
  <>
    <Header isHomepage={isHomepage} />
    {children}
    <Footer />
  </>
);
