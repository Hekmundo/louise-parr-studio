import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ pageTitle }) => {
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
    <Helmet>
      <meta charSet='utf-8' />
      <title>{pageTitle || data.site.siteMetadata.title}</title>
      <link rel='canonical' href='https://louiseparrstudio.com' />
    </Helmet>
  );
};

export default Head;
