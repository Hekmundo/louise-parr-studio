// @ts-nocheck
import React from 'react';
import InstagramLogo from '../images/instagram.svg';
import PinterestLogo from '../images/pinterest.svg';

export const Footer = () => (
  <footer>
    <div>
      <a href="https://www.instagram.com/louise_parr_studio/" target="_blank">
        <InstagramLogo fill="white" width="50px" />
      </a>
      <a
        href="https://www.pinterest.co.uk/louiseparrstudio/_saved/"
        target="_blank"
      >
        <PinterestLogo fill="white" width="50px" />
      </a>
    </div>

    <span>&copy; {new Date().getFullYear()} Louise Parr Studio</span>
  </footer>
);
