import React, { useEffect, useState } from "react";
import {
    Nav,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavLink,
    Logo,
    OpenLinkButton,
    NavLinkExtended,
    IconContainer
}
    from "../styles/Navbar.style";
import Icon from '../assets/logo.png';
import { MarkGithubIcon } from '@primer/styled-octicons'

const Navbar = () => {

    const [extendNavBar, setExtendNavBar] = useState(false)
    const [animate, setAnimation ] = useState(false)
    const [reverse, setReverse] = useState(false)

    const onClick = () => {
        setAnimation(false)
        setExtendNavBar((curr) => !curr)
    }

    useEffect(() => {
        setAnimation(true)
        setReverse((curr) => !curr)
    }, [extendNavBar])

    return (
        <Nav extendNavBar={extendNavBar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo src={Icon}></Logo>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/docs">Docs</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <IconContainer>
                            <a href="https://github.com/ponty-lab/ponty-lab.github.io">
                                <MarkGithubIcon color="#286882" size={30} aria-label="Github" />
                            </a>
                        </IconContainer>
                        <OpenLinkButton extendNavBar={animate} reverse={reverse} onClick={onClick}
                        >
                            {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinkButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavBar && (
                <NavbarExtendedContainer>
                    <NavLinkExtended  onClick={onClick} to="/">Danger Map</NavLinkExtended >
                    <NavLinkExtended onClick={onClick} to="/docs">Docs</NavLinkExtended >
                    <NavLinkExtended onClick={onClick} to="/about">About Us</NavLinkExtended >
                </NavbarExtendedContainer>
            )}

            {/*             <NavMenu>
                <NavLink to="/">
                    Danger Map
                </NavLink>
                <NavLink to="/contact">
                    Contact Us
                </NavLink>
                <NavLink to="/sign-up">
                    Sign Up
                </NavLink>
            </NavMenu> */}
        </Nav>
    );
};

export default Navbar;