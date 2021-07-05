import styled, { css } from 'styled-components';

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
    display: inline-block;
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

export const NavItem = styled.li`
  white-space: nowrap;
  color: #fff;
  padding: 0.1em 0;
  line-height: 1.3em;
  margin-left: 5vw;

  &:first-child {
    margin-left: 0;
  }

  font-size: calc((1.7 - 1) * 1.2vw + 1rem);

  @media screen and (min-width: 1432.12px) {
    font-size: calc(1.7 * 1rem);
  }
`;
