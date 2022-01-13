import { ReactNode } from 'react';

// Component props:
export interface SEOProps {
  description?: string;
  title: string;
}

interface HeaderProps {
  isHomepage?: boolean;
}

export interface LayoutProps {
  isHomepage?: boolean;
  children: ReactNode;
}

// GraphQL data:
export interface SiteData {
  site: GatsbyTypes.Site;
}

interface HeaderData {
  prismicHeader: GatsbyTypes.PrismicHeader;
}

export interface AboutPageData {
  prismicAboutPage: GatsbyTypes.PrismicAboutPage;
}

export interface ContactPageData {
  prismicContactPage: GatsbyTypes.PrismicContactPage;
}

export interface HomePageData {
  prismicHomePage: GatsbyTypes.PrismicHomePage;
}
