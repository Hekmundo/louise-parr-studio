import React, { FC } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { PrismicLink } from '@prismicio/react';
import { HeaderData } from '../types';

export const Header: FC = () => {
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

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo-anchor">
          <img src={logo?.url} alt={logo?.alt || ''} />
        </Link>

        <nav>
          <ul>
            {page_navigation?.map((item, index) => (
              <li key={`link-${index}`}>
                {/* @ts-ignore */}
                <PrismicLink field={item?.page} activeClassName="highlight">
                  {item?.page_name}
                </PrismicLink>
              </li>
            ))}

            <li>
              <a>{store_label}</a>
              <ul className="hidden">
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
      </div>
    </header>
  );
};
