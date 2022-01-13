import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { ContactPage } from '../graphql-models';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';

const ContactTemplate = ({ data }: PageProps<ContactPage>) => {
  if (!data) return null;
  const doc = data.prismicContactPage.data;

  return (
    <Layout>
      <SEO title="Contact" />
      <main className="container"></main>
    </Layout>
  );
};

export const query = graphql`
  query ContactPage {
    prismicContactPage {
      _previewable
      data {
        contact_content {
          richText
        }
        dropdown_header
        dropdown_options {
          option
        }
      }
    }
  }
`;

// @ts-ignore
export default withPrismicPreview(ContactTemplate);
