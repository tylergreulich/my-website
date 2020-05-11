import { NavLink } from "components/navigation/navigation.styles"
import React from "react"
import { BackdropColor } from "./backdrop.styles"

export const Backdrop = ({ isMobileNavActive }) => {
  return (
    <BackdropColor isMobileNavActive={isMobileNavActive}>
      <li>
        <NavLink
          to="portfolio"
          smooth={true}
          duration={750}
          offset={-75}
          spy={true}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="portfolio"
          smooth={true}
          duration={750}
          offset={-75}
          spy={true}
        >
          Blog
        </NavLink>
      </li>
    </BackdropColor>
  )
}
