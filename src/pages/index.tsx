import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { PrismicRichText } from '@prismicio/react';
import { HomePage } from '../graphql-models';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';

const HomeTemplate = ({ data }: PageProps<HomePage>) => {
  if (!data) return null;
  const {
    banner,
    footer_button_link,
    footer_button_text,
    footer_content,
    image_collage,
  } = data.prismicHomePage.data;
  console.log(image_collage[0]);

  return (
    <Layout isHomepage>
      <SEO title="Home" />
      <main className="container">
        <div>
          <h2>{banner.text}</h2>
        </div>
        <ul>
          {image_collage.map((item, index) => (
            <li key={`image-${index}`}>
              <img
                src={item.image.url}
                alt={item.image.alt || ''}
                width="100px"
              />
            </li>
          ))}
        </ul>
        <div>
          {/* @ts-ignore */}
          <PrismicRichText field={footer_content.richText} />
          <a href={footer_button_link.url} target={footer_button_link.target}>
            {footer_button_text}
          </a>
        </div>
      </main>
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
