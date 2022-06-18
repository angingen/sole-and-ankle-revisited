import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const FlipUpNavLink = ({ children, href }) => (
  <NavLink href={href}>
    <NavLinkContentWrapper>
      <NavLinkContent>{children}</NavLinkContent>
      <NavLinkContent aria-hidden>{children}</NavLinkContent>
    </NavLinkContentWrapper>
  </NavLink>
);

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <FlipUpNavLink href="/sale">Sale</FlipUpNavLink>
          <FlipUpNavLink href="/new">New&nbsp;Releases</FlipUpNavLink>
          <FlipUpNavLink href="/men">Men</FlipUpNavLink>
          <FlipUpNavLink href="/women">Women</FlipUpNavLink>
          <FlipUpNavLink href="/kids">Kids</FlipUpNavLink>
          <FlipUpNavLink href="/collections">Collections</FlipUpNavLink>
        </Nav>
        <Side />
        <IconButton>
          <Icon id="shopping-bag" strokeWidth={2} size={16} />
        </IconButton>
        <IconButton>
          <Icon id="search" strokeWidth={2} size={16} />
        </IconButton>
        <IconButton onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu" strokeWidth={2} size={16} />
        </IconButton>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLinkContentWrapper = styled.span`
  display: block;
  transition: transform 450ms;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  height: calc(1.5 * 1.125rem);
  overflow: hidden;

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  &:hover ${NavLinkContentWrapper} {
    transform: translateY(calc(-1.125rem * 1.5));
    transition: transform 250ms;
  }
`;

const NavLinkContent = styled.span`
  display: block;

  &:last-of-type {
    font-weight: ${WEIGHTS.bold};
  }
`;

const IconButton = styled(UnstyledButton)`
  background-color: transparent;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  display: none;

  &:first-of-type {
    margin-left: auto;
  }

  &:last-of-type {
    margin-right: -10px;
  }

  @media ${QUERIES.tabletAndBelow} {
    display: revert;
  }
`;

export default Header;
