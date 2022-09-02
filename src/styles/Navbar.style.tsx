import styled from "styled-components";
import { Link } from "react-router-dom";
import {MarkGithubIcon} from '@primer/octicons-react'

interface styledNavProps {
    extendNavBar: boolean;
    reverse?: boolean;
}

const navHeight = '60px';

export const Nav = styled.nav<styledNavProps>`
  width: 100%;
  height: ${(props) => (props.extendNavBar ? "100vh" : navHeight)};
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 20px 4px 10px rgba(0,0,0,0.05);
  border-bottom: 1px solid #eaecef;
  z-index: 20;

  @media (min-width: 900px) {
    height: navHeight;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: navHeight;
  display: flex;
`

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  padding-left: 50px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
    color: rgba(40,104,130, 0.95);
    font-weight: 600;
    text-decoration: none;
    margin: 10px;
    display: flex;
    align-items: center;

    &:hover {
      color: #d86623;
      z-index: 1;
    }
    
    @media (max-width: 900px) {
    display:none;
  }    
`;

export const NavLinkExtended = styled(Link)`
  color: rgba(40,104,130, 0.95);
  font-size: 1.25em;
  font-weight: 600;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
    margin: 10px;
    max-width: 145px;
    height: auto;
`;

export const OpenLinkButton = styled.button<styledNavProps>`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  color: rgba(40,104,130, 0.95);
  font-size: 45px;
  cursor: pointer;
  animation-name:  ${(props) => (props.extendNavBar ? "spin" : null)};
  animation-direction: ${(props) => (props.reverse ? "normal" : "reverse")};
  animation-duration: ${(props) => (props.reverse ? "300ms" : "100ms")};
  animation-fill-mode: both;
  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(180deg);
    }
}

  @media (min-width: 900px) {
    display:none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    margin-left: 50px;

    @media (min-width: 900px) {
        display: none;
    }
`;