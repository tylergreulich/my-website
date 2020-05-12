import { NavLink } from "components/navigation/navigation.styles"
import React from "react"
import { BackdropColor } from "./backdrop.styles"

export const Backdrop = ({ isMobileNavActive, handleIsMobileActive }) => {
  return (
    <BackdropColor isMobileNavActive={isMobileNavActive}>
      <li>
        <NavLink
          to="skills"
          smooth={true}
          duration={750}
          offset={-125}
          spy={true}
          onClick={handleIsMobileActive}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="blog"
          smooth={true}
          duration={750}
          offset={-125}
          spy={true}
          onClick={handleIsMobileActive}
        >
          Blog
        </NavLink>
      </li>
    </BackdropColor>
  )
}
