import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { HomePage } from '../models';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';

const HomeTemplate: FC<PageProps<HomePage>> = ({ data }) => {
  if (!data) return null;

  const doc = data.prismicHomePage.data;
  console.log(doc);

  return (
    <Layout isHomepage>
      <SEO title="Home" />
      <main className="container"></main>
    </Layout>
  );
};

export const query = graphql`
  query HomePage {
    prismicHomePage {
      _previewable
      data {
        banner {
          text
        }
        footer_button_link {
          url
          target
        }
        footer_button_text
        footer_content {
          richText
        }
        image_collage {
          image {
            alt
            url
          }
        }
      }
    }
  }
`;

// export const query = graphql`
//   query Homepage {
//     prismicHomepage {
//       _previewable
//       data {
//         banner_title {
//           text
//         }
//         banner_description {
//           text
//         }
//         banner_link {
//           url
//           type
//           uid
//         }
//         banner_link_label {
//           text
//         }
//         banner_background {
//           url
//         }
//         body {
//           ... on PrismicSliceType {
//             slice_type
//           }
//           # These are Query Fragments that will be
//           # automatically picked up from each slice component.
//           ...HomepageDataBodyText
//           ...HomepageDataBodyQuote
//           ...HomepageDataBodyFullWidthImage
//           ...HomepageDataBodyImageGallery
//           ...HomepageDataBodyImageHighlight
//         }
//       }
//     }
//   }
// `;

// @ts-ignore
export default withPrismicPreview(HomeTemplate);
