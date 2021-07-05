import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  StyledHeader,
  ContentContainer,
  Nav,
  NavList,
  NavItem,
} from './header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <ContentContainer>
        <StaticImage
          src='../../images/logo.png'
          alt='Louise Parr Studio Logo'
          className='logo'
        />
        <Nav>
          <NavList>
            <a>
              <NavItem>ABOUT</NavItem>
            </a>
            <NavItem>SHOP</NavItem>
            <NavItem>CONTACT</NavItem>
          </NavList>
        </Nav>
      </ContentContainer>
    </StyledHeader>
  );
};

export default Header;
