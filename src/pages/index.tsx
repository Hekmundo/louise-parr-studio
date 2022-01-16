import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { PrismicRichText } from '@prismicio/react';
import { HomePageData } from '../types';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';

const HomeTemplate: FC<PageProps<HomePageData>> = ({ data }) => {
  if (!data) return null;
  const {
    banner,
    footer_button_link,
    footer_button_text,
    footer_content,
    image_collage,
  } = data.prismicHomePage.data;

  return (
    <Layout>
      <SEO title="Home" />
      <main className="homepage">
        <section className="homepage-banner">
          <h2 className="container center-flex">{banner?.text}</h2>
        </section>

        <section className="gallery">
          <ul className="container">
            {image_collage?.map((item, index) => (
              <li key={`image-${index}`}>
                <img src={item?.image?.url} alt={item?.image?.alt || ''} />
              </li>
            ))}
          </ul>
        </section>

        <section className="homepage-footer">
          <div className="container center-flex">
            <PrismicRichText field={footer_content?.richText} />
            <a
              className="cta-btn"
              href={footer_button_link?.url}
              target={footer_button_link?.target}
            >
              {footer_button_text}
            </a>
          </div>
        </section>
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

// @ts-ignore
export default withPrismicPreview(HomeTemplate);
