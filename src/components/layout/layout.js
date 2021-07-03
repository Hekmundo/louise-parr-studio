import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main>
      <title>{pageTitle || data.site.siteMetadata.title}</title>
      <nav>{children}</nav>
    </main>
  );
};

export default Layout;
