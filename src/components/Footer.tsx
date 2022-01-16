// @ts-nocheck
import React from 'react';
import InstagramLogo from '../images/instagram.svg';
import PinterestLogo from '../images/pinterest.svg';

export const Footer = () => (
  <footer>
    <div className="container center-flex">
      <div className="social-links">
        <a href="https://www.instagram.com/louise_parr_studio/" target="_blank">
          <InstagramLogo />
        </a>
        <a
          href="https://www.pinterest.co.uk/louiseparrstudio/_saved/"
          target="_blank"
        >
          <PinterestLogo />
        </a>
      </div>

      <span>&copy; {new Date().getFullYear()} Louise Parr Studio</span>
    </div>
  </footer>
);
