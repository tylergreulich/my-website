import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Backdrop } from "./backdrop/backdrop"
import {
  CloseIcon,
  CloseIconWrapper,
  HamburgerIcon,
  HamburgerIconWrapper,
  MobileNavLink,
  MobileNavLinkContainer,
  HamburgerIconContainer
} from "./mobileNavigation.styles"

import {
  Header,
  LogoWrapper,
  MainNav,
  NavLink,
  NavLinks,
  ThemeToggle,
  ThemeToggleWrapper
} from "../navigation.styles"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export const MobileNavigation = ({
  handleClick,
  isMobileNavActive,
  handleIsMobileActive,
  isDarkMode,
  setIsDarkMode
}) => {
  return (
    <>
      <MobileNavLinkContainer>
        {!isDarkMode ? (
          <ThemeToggleWrapper
            onClick={() => {
              setIsDarkMode(true)
              localStorage.setItem("isDarkMode", true)
            }}
          >
            <ThemeToggle icon={faSun} />
          </ThemeToggleWrapper>
        ) : (
            <ThemeToggleWrapper
              onClick={() => {
                setIsDarkMode(false)
                localStorage.setItem("isDarkMode", false)
              }}
            >
              <ThemeToggle icon={faMoon} />
            </ThemeToggleWrapper>
          )}
        <li>
          <MobileNavLink
            to="my-work"
            smooth={true}
            duration={750}
            offset={-125}
            spy={true}
          >
            Work
          </MobileNavLink>
        </li>
        <li>
          <MobileNavLink
            to="contact-me"
            smooth={true}
            duration={750}
            offset={-125}
            spy={true}
          >
            Contact
          </MobileNavLink>
        </li>
        <CloseIconWrapper isMobileNavActive={isMobileNavActive}>
          <CloseIcon
            icon={faTimes}
            isMobileNavActive={isMobileNavActive}
            onClick={handleClick}
          />
        </CloseIconWrapper>
        <HamburgerIconWrapper isMobileNavActive={isMobileNavActive}>
          <HamburgerIcon
            icon={faBars}
            isMobileNavActive={isMobileNavActive}
            onClick={handleClick}
          />
        </HamburgerIconWrapper>
      </MobileNavLinkContainer>
      {/* <HamburgerIconContainer> */}
      {/* </HamburgerIconContainer> */}
      <Backdrop
        isMobileNavActive={isMobileNavActive}
        handleIsMobileActive={handleIsMobileActive}
      />
    </>
  )
}
