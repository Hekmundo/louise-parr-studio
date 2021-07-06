import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import InstaIcon from '../../images/svg/ig-icon.svg';
import PinterestIcon from '../../images/svg/pinterest-icon.svg';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  box-sizing: border-box;
  padding-top: 2.5vw;
  padding-bottom: 2.5vw;
  padding-left: 2vw;
  padding-right: 2vw;
  ${'' /* pointer-events: auto; */}
  line-height: 1.3em;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 0 67%;
  width: 100%;
  height: inherit;
  box-sizing: border-box;

  .logo {
    max-height: 187px;
    max-width: 267.23px;
  }
`;

export const Nav = styled.nav`
  text-align: right;
  margin-left: auto;
  padding-left: 5.5vw;
  flex-grow: 1;
`;

export const NavList = styled.ul`
  justify-content: flex-end;
  display: inline-flex;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  ${(props) => {
    const route =
      typeof window !== 'undefined'
        ? window.location.href.match(/\/\w+$/)
        : null;

    return route && route[0].slice(1) === props.children.toLowerCase()
      ? css`
          border-bottom: 1px solid ${props.theme.textPrimary};
        `
      : '';
  }}
`;

export const NavItem = styled.li`
  white-space: nowrap;
  color: ${(props) => props.theme.textPrimary};
  padding: 0.1em 0;
  line-height: 1.3em;
  margin-left: 5vw;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    position: relative;
  }

  font-size: calc(0.7 * 1.2vw + 1rem);

  @media screen and (min-width: 1432.12px) {
    font-size: calc(1.7 * 1rem);
  }
`;

export const SocialsContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-content: center;
`;

export const SocialLink = styled.a`
  margin-left: 5.5vw;
  width: 30px;
  height: 30px;
`;

const IconStyles = css`
  max-width: 100%;
  max-height: 100%;

  path {
    fill: ${(props) => props.theme.textPrimary};
  }
`;

export const StyledInstaIcon = styled(InstaIcon)`
  ${IconStyles}
`;

export const StyledPinterestIcon = styled(PinterestIcon)`
  ${IconStyles}
`;

export const ShopLink = styled.span`
  cursor: pointer;
`;

export const ShopDropdown = styled.ul`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.primary};
  top: auto;
  left: auto;
  right: -1em;
  text-align: right;
  padding: 0.5em 1em;
  min-width: 200px;
  z-index: 10;
  line-height: 1.6em;

  ${NavItem}:last-child:hover & {
    display: block;
  }
`;
