import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PrismicRichTextProps } from '@prismicio/react';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { PrismicRichText } from '@prismicio/react';
import { AboutPage } from '../graphql-models';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';

const AboutTemplate = ({ data }: PageProps<AboutPage>) => {
  if (!data) return null;

  const { about_content, about_image, instagram_header, main_paragraph } =
    data.prismicAboutPage.data;

  return (
    <Layout>
      <SEO title="About" />
      <main className="container" style={{ color: 'white' }}>
        {/* @ts-ignore */}
        <PrismicRichText field={about_content.richText} />
        <img src={about_image.url} alt={about_image.alt || ''} />
        {/* @ts-ignore */}
        <PrismicRichText field={instagram_header.richText} />
        {/* @ts-ignore */}
        <PrismicRichText field={main_paragraph.richText} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query AboutPage {
    prismicAboutPage {
      _previewable
      data {
        about_content {
          richText
        }
        about_image {
          url
          alt
        }
        instagram_header {
          richText
        }
        main_paragraph {
          richText
        }
      }
    }
  }
`;

// @ts-ignore
export default withPrismicPreview(AboutTemplate);
