// Header.js file

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PrismicLink } from '@prismicio/react';
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews';

interface HeaderProps {
  isHomepage?: boolean;
}

export const Header = ({ isHomepage = false }: HeaderProps) => {
  // const queryData = useStaticQuery(graphql`
  //   {
  //     prismicNavigation {
  //       _previewable
  //       data {
  //         top_navigation {
  //           link {
  //             url
  //             link_type
  //           }
  //           link_label {
  //             text
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const { data } = useMergePrismicPreviewData(queryData);

  // const navigation = data.prismicNavigation;
  // const topNav = navigation.data.top_navigation;

  const homepageClass = isHomepage ? 'homepage-header' : '';

  return (
    <header className={`site-header ${homepageClass}`}>
      <a href="/">
        <div className="logo">Example Site</div>
      </a>
      <nav>
        {/* <ul>
          {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                <PrismicLink field={navItem.link}>
                  {navItem.link_label.text}
                </PrismicLink>
              </li>
            );
          })}
        </ul> */}
      </nav>
    </header>
  );
};
