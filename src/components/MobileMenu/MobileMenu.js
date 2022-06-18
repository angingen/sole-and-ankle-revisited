/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <DismissButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} size={16} />
        </DismissButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const backgroundFadeIn = keyframes`
  from {
    background: transparent;
  }

  to {
    background: hsl(0deg 0% 0% / 0.5);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    justify-content: flex-end;
  }

  @media ${QUERIES.noReducedAnimation} {
    animation: ${backgroundFadeIn} 600ms ease-out;
    animation-fill-mode: both;
  }
`;

const DismissButton = styled(UnstyledButton)`
  width: 44px;
  height: 44px;
  margin: -10px -10px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;

  :hover {
    color: ${COLORS.secondary};
    text-decoration: revert;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Content = styled(DialogContent)`
  padding: 32px;
  background-color: ${COLORS.white};
  width: max(300px, 50vw);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${QUERIES.noReducedAnimation} {
    animation: ${slideIn} 250ms 0s ease-in-out both;

    > * {
      animation: ${fadeIn} 250ms 200ms ease-in-out both;
    }
  }
`;

export default MobileMenu;
