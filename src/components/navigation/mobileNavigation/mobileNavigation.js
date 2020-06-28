import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Backdrop } from "./backdrop/backdrop"
import {
  CloseIcon,
  CloseIconWrapper,
  HamburgerIcon,
  HamburgerIconWrapper,
  MobileNavLink,
  MobileNavLinkContainer
} from "./mobileNavigation.styles"

export const MobileNavigation = ({
  handleClick,
  isMobileNavActive,
  handleIsMobileActive,
}) => {
  return (
    <>
      <MobileNavLinkContainer>
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
      </MobileNavLinkContainer>
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
      <Backdrop
        isMobileNavActive={isMobileNavActive}
        handleIsMobileActive={handleIsMobileActive}
      />
    </>
  )
}
