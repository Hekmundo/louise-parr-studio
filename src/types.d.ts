import { ReactNode } from 'react';

// Component props:
export interface SEOProps {
  description?: string;
  title: string;
}

export interface LayoutProps {
  children: ReactNode;
}

// GraphQL data:
export interface SiteData {
  site: GatsbyTypes.Site;
}
export interface ColourThemeData {
  prismicColourTheme: GatsbyTypes.PrismicColourTheme;
}

interface HeaderData extends ColourThemeData {
  prismicHeader: GatsbyTypes.PrismicHeader;
}

export interface AboutPageData extends ColourThemeData {
  prismicAboutPage: GatsbyTypes.PrismicAboutPage;
}

export interface ContactPageData extends ColourThemeData {
  prismicContactPage: GatsbyTypes.PrismicContactPage;
}

export interface HomePageData extends ColourThemeData {
  prismicHomePage: GatsbyTypes.PrismicHomePage;
}
