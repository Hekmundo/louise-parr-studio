import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '../../global.css';
import {
  siteWrapper,
  header,
  headerWrapper,
  innerHeader,
  logoWrapper,
  logoImage,
  logoAnchor,
  nav,
  navList,
  pageLink,
  contact,
  shop,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={siteWrapper}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{pageTitle || data.site.siteMetadata.title}</title>
        <link rel='canonical' href='https://louiseparrstudio.com' />
      </Helmet>

      <header className={header}>
        <div className={headerWrapper}>
          <div className={innerHeader}>
            <Link to='/' className={logoAnchor} aria-label='Home'>
              <StaticImage
                imgClassName={logoImage}
                alt='Louise Parr Studio Logo'
                src='../../images/logo.png'
                className={logoWrapper}
              />
            </Link>

            <nav className={nav}>
              <ul className={navList}>
                <li>
                  <Link to='/about' className={pageLink}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className={`${pageLink} ${contact}`}>
                    CONTACT
                  </Link>
                </li>
                <li>
                  <a className={`${pageLink} ${shop}`}>SHOP</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
