import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  StyledHeader,
  ContentContainer,
  Nav,
  NavList,
  NavItem,
  SocialsContainer,
  SocialLink,
  StyledInstaIcon,
  StyledPinterestIcon,
  ShopDropdown,
  ShopLink,
} from './header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <ContentContainer>
        <Link to='/' aria-label='Home'>
          <StaticImage
            src='../../images/logo.png'
            alt='Louise Parr Studio Logo'
            className='logo'
          />
        </Link>

        <Nav>
          <NavList>
            <NavItem>
              <Link to='/about'>ABOUT</Link>
            </NavItem>
            <NavItem>
              <Link to='/contact'>CONTACT</Link>
            </NavItem>
            <NavItem>
              <ShopLink>SHOP</ShopLink>
              <ShopDropdown>
                <li>
                  <a href='https://www.etsy.com/uk/shop/louiseparrstudio'>
                    ART PRINTS
                  </a>
                </li>
                <li>
                  <a href='https://www.spoonflower.com/profiles/louiseparrstudio'>
                    FABRICS
                  </a>
                </li>
                <li>
                  <a href='https://www.thortful.com/creator/louiseparrstudio'>
                    CARDS
                  </a>
                </li>
              </ShopDropdown>
            </NavItem>
          </NavList>
        </Nav>

        <SocialsContainer>
          <SocialLink
            target='_blank'
            href='https://www.instagram.com/louise_parr_studio/'
            aria-label='Instagram'
          >
            <StyledInstaIcon />
          </SocialLink>
          <SocialLink
            target='_blank'
            href='https://www.pinterest.co.uk/louiseparrstudio/'
            aria-label='Pinterest'
          >
            <StyledPinterestIcon />
          </SocialLink>
        </SocialsContainer>
      </ContentContainer>
    </StyledHeader>
  );
};

export default Header;
