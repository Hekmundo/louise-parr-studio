import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PrismicLink } from '@prismicio/react';
import { HeaderData, HeaderProps } from '../types';

export const Header: FC<HeaderProps> = ({ isHomepage = false }) => {
  const { prismicHeader }: HeaderData = useStaticQuery(graphql`
    {
      prismicHeader {
        data {
          logo {
            alt
            url
          }
          page_navigation {
            page {
              url
              link_type
            }
            page_name
          }
          store_label
          store_links {
            store_link {
              url
              target
            }
            store_name
          }
        }
      }
    }
  `);

  const { logo, page_navigation, store_label, store_links } =
    prismicHeader.data;

  const homepageClass = isHomepage ? 'homepage-header' : '';

  return (
    <header className={`site-header ${homepageClass}`}>
      <a href="/">
        <img
          className="logo"
          src={logo?.url}
          alt={logo?.alt || ''}
          width="200px"
        />
      </a>

      <nav>
        <ul>
          {page_navigation?.map((item, index) => (
            <li key={`link-${index}`}>
              {/* @ts-ignore */}
              <PrismicLink field={item?.page}>{item?.page_name}</PrismicLink>
            </li>
          ))}

          <li>
            <a>{store_label}</a>
            <ul>
              {store_links?.map((item, index) => (
                <li key={`store-link-${index}`}>
                  <a
                    href={item?.store_link?.url}
                    target={item?.store_link?.target}
                  >
                    {item?.store_name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
