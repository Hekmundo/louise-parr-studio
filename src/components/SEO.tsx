import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteData } from '../models';

interface SEOProps {
  description?: string;
  title: string;
}

const SEO = ({ description = '', title }: SEOProps) => {
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
