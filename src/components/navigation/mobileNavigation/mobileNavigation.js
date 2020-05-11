import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Backdrop } from "./backdrop/backdrop"
import {
  CloseIcon,
  HamburgerIcon,
  IconWrapper,
  MobileNavLink,
  MobileNavLinkContainer,
} from "./mobileNavigation.styles"

export const MobileNavigation = () => {
  const [isMobileNavActive, setIsMobileNavActive] = React.useState(false)

  return (
    <>
      <MobileNavLinkContainer>
        <li>
          <MobileNavLink
            to="portfolio"
            smooth={true}
            duration={750}
            offset={-75}
            spy={true}
          >
            Portfolio
          </MobileNavLink>
        </li>
        <li>
          <MobileNavLink
            to="contact"
            smooth={true}
            duration={750}
            offset={-75}
            spy={true}
          >
            Contact
          </MobileNavLink>
        </li>
      </MobileNavLinkContainer>
      {isMobileNavActive ? (
        <IconWrapper>
          <CloseIcon
            icon={faTimes}
            isMobileNavActive={isMobileNavActive}
            onClick={() => setIsMobileNavActive(false)}
          />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <HamburgerIcon
            icon={faBars}
            isMobileNavActive={isMobileNavActive}
            onClick={() => setIsMobileNavActive(true)}
          />
        </IconWrapper>
      )}
      <Backdrop isMobileNavActive={isMobileNavActive} />
    </>
  )
}
