import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  StyledHeader,
  ContentContainer,
  Nav,
  NavList,
  NavItem,
  StyledLink,
  SocialsContainer,
  SocialLink,
  StyledInstaIcon,
  StyledPinterestIcon,
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
              <StyledLink to='/about'>ABOUT</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to='/contact'>CONTACT</StyledLink>
            </NavItem>
            <NavItem>SHOP</NavItem>
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
