import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SEOProps, SiteData } from '../types';

const SEO: FC<SEOProps> = ({ description = '', title }) => {
  const { site }: SiteData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaTitle = title
    ? `${title} | ${site.siteMetadata?.title}`
    : site?.siteMetadata?.title;
  const metaDescription = description || site.siteMetadata?.description;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
