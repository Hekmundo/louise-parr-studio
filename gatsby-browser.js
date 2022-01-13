import * as React from 'react';
import { Link } from 'gatsby';
import { PrismicProvider } from '@prismicio/react';
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews';

import './src/styles/reset.css';
import './src/styles/common.css';
import './src/styles/style.css';

import { linkResolver } from './src/LinkResolver';
import HomeTemplate from './src/pages/index';
import AboutTemplate from './src/pages/about';
import ContactTemplate from './src/pages/contact';

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}
  >
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver,
          componentResolver: componentResolverFromMap({
            'home-page': HomeTemplate,
            'about-page': AboutTemplate,
            'contact-page': ContactTemplate,
          }),
        },
      ]}
    >
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
);
